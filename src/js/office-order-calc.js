const buildingsBtnList = document.querySelectorAll('.buildings__element');
const increaseSquareBtn = document.querySelector('.control-quantity-btn--plus');
const decreaseSquareBtn = document.querySelector(
  '.control-quantity-btn--minus'
);

const squareValueElementsList = document.querySelectorAll('.square-value');
const servicesElementsList = document.querySelectorAll('.service-element');
const serviceCheckboxList = document.querySelectorAll(
  '.service-element .checkbox'
);
const totalCostTableElement = document.querySelector('.table__data');

increaseSquareBtn.addEventListener('click', onChangeSquareBtnClick);
decreaseSquareBtn.addEventListener('click', onChangeSquareBtnClick);
buildingsBtnList.forEach(el => {
  el.addEventListener('click', e => {
    onBuldingTypeBtnClick(e);
  });
});

serviceCheckboxList.forEach(el => {
  el.addEventListener('change', e => {
    toggleServiceItem(e);
  });
});

const itemQuantities = {
  square: { quantity: 1, price: 2 },
  windowsStandard: { quantity: 1, price: 35 },
  windowsLarge: { quantity: 1, price: 40 },
  microWave: { quantity: 1, price: 15 },
  refrigerator: { quantity: 1, price: 40 },
  plate: { quantity: 1, price: 35 },
  officeChair: { quantity: 1, price: 20 },
  sofaDry2x: { quantity: 1, price: 109.99 },
  sofaDry3x: { quantity: 1, price: 129.99 },
  sofaDry4x: { quantity: 1, price: 149.99 },
};

function onBuldingTypeBtnClick(e) {
  const clickedButton = e.target;
  if (clickedButton.classList.contains('buildings__element--current')) return;
  buildingsBtnList.forEach(button => {
    if (button === clickedButton) {
      const id = button.id;
      button.classList.add('buildings__element--current');
    } else {
      button.classList.remove('buildings__element--current');
    }
  });
}

function updateSquareInterfaceValue() {
  squareValueElementsList.forEach(el => {
    el.textContent = itemQuantities.square;
  });
}

function updateServiceItemInterface(serviceName) {
  const label = [...servicesElementsList].find(
    el => el.getAttribute('data-id') === serviceName
  );
  const itemQntEl = label.nextElementSibling.querySelector(
    `[data-name="${serviceName}"]`
  );
  const totalItemQntEl = document.querySelector(
    `[data-service="${serviceName}"]`
  );
  itemQntEl.textContent = itemQuantities[serviceName].quantity;
}

function onChangeSquareBtnClick(e) {
  const operationType = getClickedBtnType(e);
  changeSquareValue(operationType);
  updateSquareInterfaceValue();
  updateSquareTotalCost();
  // updateMinusBtnStyle();
}

function changeSquareValue(operation) {
  if (operation === 'plus') {
    itemQuantities.square += 1;
  } else if (operation === 'minus') {
    if (itemQuantities.square === 1) return;
    itemQuantities.square -= 1;
  }
}

function changeServiceItemValue(itemName, operation) {
  if (operation === 'plus') {
    itemQuantities[itemName].quantity += 1;
  } else if (operation === 'minus') {
    if (itemQuantities[itemName].quantity === 1) return;
    itemQuantities[itemName].quantity -= 1;
  }
}

function getClickedBtnType(e) {
  const type = e.currentTarget.getAttribute('data-type');
  return type;
}

function getChosenServiceName(e) {
  const chosenServiceName = e.currentTarget
    .closest('.wrap--service')
    .parentNode.querySelector('label')
    .getAttribute('data-id');
  return chosenServiceName;
}

function onChangeQuantityBtnClick(e) {
  const serviceName = getChosenServiceName(e);
  const operationType = getClickedBtnType(e);
  changeServiceItemValue(serviceName, operationType);
  updateServiceItemInterface(serviceName);
  updateServiceItemTotalCost(serviceName);
  // updateMinusBtnStyle();
}

function updateMinusBtnStyle() {
  const decreaseSquareIcon = document.querySelector(
    '.control-quantity-btn--minus .icon--minus'
  );
  if (square === 1) {
    decreaseSquareIcon.style.fill = 'rgba(	77, 18, 153, 0.3)';
  } else {
    decreaseSquareIcon.style.fill = '#4D1299';
  }
}

function updateSquareTotalCost() {
  const totalSquareCostEl = document.querySelector('#squareValue');
  totalSquareCostEl.textContent = `${2 * itemQuantities.square}`;
}

function updateServiceItemTotalCost(serviceName) {
  const totalServiceItemCost = document.querySelector(
    `[data-service="${serviceName}"]`
  );
  const totalServiceItemQuantity = document.querySelector(
    `#${serviceName} .service-quantity`
  );
  totalServiceItemCost.textContent = `${
    itemQuantities[serviceName].price * itemQuantities[serviceName].quantity
  }zł`;
  totalServiceItemQuantity.textContent = itemQuantities[serviceName].quantity;
}

function toggleServiceItem(e) {
  const el = e.currentTarget;
  const label = el.closest('label');
  const controlQuantityBlock = label.nextElementSibling;
  const isServiceChosen = el.checked;
  toggleControlQuantityBlock(controlQuantityBlock, isServiceChosen);
  attachQuantityButtonListeners(controlQuantityBlock);
  const serviceItem = createServiceItem(label);
  updateTotalCostTable(isServiceChosen, serviceItem);
}

function toggleControlQuantityBlock(controlQuantityBlock, isVisible) {
  controlQuantityBlock.classList.toggle('isHidden', !isVisible);
}

function attachQuantityButtonListeners(controlQuantityBlock) {
  const increaseQuantityBtn = controlQuantityBlock.querySelector(
    '.control-quantity-btn--plus'
  );
  const decreaseQuantityBtn = controlQuantityBlock.querySelector(
    '.control-quantity-btn--minus'
  );

  increaseQuantityBtn.addEventListener('click', onChangeQuantityBtnClick);
  decreaseQuantityBtn.addEventListener('click', onChangeQuantityBtnClick);
}

function updateTotalCostTable(isServiceChosen, item) {
  const itemId = item.id;
  const tableElementsList = totalCostTableElement.querySelectorAll('li');
  const chosenItem = [...tableElementsList].find(el => el.id === itemId);
  if (isServiceChosen && !chosenItem) {
    totalCostTableElement.insertAdjacentElement('beforeend', item);
  } else if (!isServiceChosen && chosenItem) {
    totalCostTableElement.removeChild(chosenItem);
  }
}

function createSpan(className, textContent) {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = textContent;
  return span;
}

function createServiceItem(element) {
  const serviceName = element.querySelector(
    '.service-element__text'
  ).textContent;
  const servicePrice = element
    .querySelector('.service-element__accent')
    .getAttribute('data-value');
  const serviceID = element.getAttribute('data-id');
  const listItem = document.createElement('li');
  listItem.id = serviceID;
  listItem.className = 'table__item table__block';
  const nameSpan = createSpan('item__name', `${serviceName}`);
  const spaceTextNode = document.createTextNode('\u00A0 x');
  const quantitySpan = createSpan(
    'item__quantity service-quantity',
    itemQuantities[serviceID].quantity
  );

  quantitySpan.textContent = itemQuantities[serviceID].quantity;
  appendChildNodes(nameSpan, [spaceTextNode, quantitySpan]);
  const valueSpan = createSpan('service-value', `${servicePrice}zł`);
  valueSpan.setAttribute('data-service', serviceID);
  appendChildNodes(listItem, [nameSpan, valueSpan]);
  return listItem;
}

function appendChildNodes(parent, children) {
  children.forEach(child => {
    parent.appendChild(child);
  });
}

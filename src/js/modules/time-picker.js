import { toggleIconActiveStyle } from './common';
const selectedTimeObj = { hours: '20', minutes: '00' };
const timePickerElement = document.querySelector('.time-picker-wrap');
const clockIcon = document.querySelector('.icon--clock');
const hourTablo = document.querySelector('.tablo--hours');
const minuteTablo = document.querySelector('.tablo--minutes');
const hourPicker = document.querySelector('.time-picker__hours');
const minutePicker = document.querySelector('.time-picker__minutes');
const timePickerBtn = document.querySelector('.time-picker__btn');
const timeInput = document.querySelector('[name="userTime"]');
timeInput.addEventListener('click', () => {
  toggleIconActiveStyle(clockIcon);
  toggleTimePickerVisibility();
  const isTimePickerVisible = !timePickerElement.classList.contains('isHidden');
  if (isTimePickerVisible) {
    setTimeInputValue();
  }
});
timeInput.addEventListener('blur', e => {
  const trimmedValue = extractTime(e.target.value);
  timeInput.value = trimmedValue;
});

function setTimeInputValue() {
  timeInput.value = `${selectedTimeObj.hours} : ${selectedTimeObj.minutes}`;
}

hourTablo.addEventListener('click', e =>
  onTimeCellClick(e, '.time-picker__hours')
);
minuteTablo.addEventListener('click', e =>
  onTimeCellClick(e, '.time-picker__minutes')
);
minutePicker.addEventListener('click', () =>
  toggleTablo(minuteTablo, hourTablo)
);
hourPicker.addEventListener('click', () => toggleTablo(hourTablo, minuteTablo));

function onTimeCellClick(e, blockSelector) {
  const clickedElement = e.target;
  if (!validateClickedNumber(clickedElement)) return;
  const partTimeName = getTimePartName(blockSelector);
  const elements = document.querySelectorAll(`.${partTimeName}`);
  updateTimePickerTablo(clickedElement, elements);
  const block = document.querySelector(blockSelector);
  const value = clickedElement.dataset.id;
  updateTimePickerBlock(block, value);
  updateTimeInput(blockSelector, value);
}

function validateClickedNumber(clickedElement) {
  return (
    clickedElement.classList.contains('number') &&
    !clickedElement.classList.contains('active')
  );
}

function updateTimePickerTablo(clickedElement, elements) {
  [...elements].map(element =>
    element === clickedElement
      ? selectElement(element)
      : deselectElement(element)
  );
}

function selectElement(element) {
  element.classList.add('active');
}

function deselectElement(element) {
  element.classList.remove('active');
}

function updateTimePickerBlock(block, value) {
  block.innerHTML = value;
}

function toggleTablo(tabloToShow, tabloToHide) {
  const isVisible = !tabloToShow.classList.contains('isHidden');
  if (isVisible) return;
  tabloToShow.classList.remove('isHidden');
  tabloToHide.classList.add('isHidden');
}

clockIcon.addEventListener('click', e => {
  toggleTimePickerVisibility();
  toggleIconActiveStyle(e.target);
});

timePickerBtn.addEventListener('click', () => {
  toggleTimePickerVisibility();
  toggleIconActiveStyle(clockIcon);
});

function toggleTimePickerVisibility() {
  timePickerElement.classList.toggle('isHidden');
}

function updateTimeInput(selector, value) {
  const partTime = getTimePartName(selector);
  selectedTimeObj[partTime] = value;
  setTimeInputValue();
}

function getTimePartName(selector) {
  return selector.split('__')[1];
}

function extractTime(inputString) {
  const trimmedString = inputString.trim();
  const timeMatch = trimmedString.match(/\d{2}\s*:\s*\d{2}/);
  return timeMatch ? timeMatch[0] : null;
}

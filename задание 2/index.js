const dropdownOne = document.getElementById('dropdown-one');
const dropdownTwo = document.getElementById('dropdown-two');
const dropdownThree = document.getElementById('dropdown-three');
const dropdownFour = document.getElementById('dropdown-four');
const dropdownFive = document.getElementById('dropdown-five');
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const form = document.getElementById('form');

const outputText = document.querySelector('.output__text');

const API = 'обработчик';

function createJSON() {
  const data = {
    list1: dropdownOne.value,
    list2: dropdownTwo.value,
    list3: dropdownThree.value,
    list4: dropdownFour.value,
    list5: dropdownFive.value,
    input1: inputOne.value,
    input2: inputTwo.value
  };
  return JSON.stringify(data);
}

async function getData() {
  // "к абстрактному обработчику на том же сервере (в той же папке)" - не совсем поняла, что требовалось
  const res = await fetch(API, {
    headers: {
      'Content-Type': 'application/json'
      }
  });
  if (res.ok) {
    const data = res.json()
    return data;
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

async function submitForm(evt) {
  evt.preventDefault();

  const formData = createJSON();
  outputText.textContent = formData;

  try {
    const data = await getData();
    alert('Ответ сервера: ' + JSON.stringify(data));
  } catch (err) {
    alert('Ошибка: ' + err);
  }
}

form.addEventListener('submit', submitForm);
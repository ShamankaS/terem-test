const buttonOne = document.getElementById('btn-one');
const buttonTwo = document.getElementById('btn-two');
const titleBlock = document.querySelector('.block_large');
const blockOne = document.getElementById('block-one');
const blockTwo = document.getElementById('block-two');
const main = document.querySelector('.main');
const modalWindow = document.getElementById('modal');

function hiddenTitle() {
  titleBlock.classList.toggle('block_hidden');
};

function swapBlocks() {
  if (blockOne.nextSibling === blockTwo) {
    main.insertBefore(blockTwo, blockOne);
  } else {
    main.insertBefore(blockOne, blockTwo);
  }
};

buttonOne.addEventListener('click', hiddenTitle);
buttonTwo.addEventListener('click', swapBlocks);

const myModal = new bootstrap.Modal('#modal', {
  keyboard: false
});

function openModal() {
  myModal.show(modalWindow);
};

document.addEventListener('DOMContentLoaded', openModal);
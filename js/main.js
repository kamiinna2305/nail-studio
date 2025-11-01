"use strict";

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');
const triggers = document.querySelectorAll('.modal-trigger');

triggers.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


/*Translate */


document.querySelector('.burger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.header_links').classList.toggle('open');
});

// Закрыть при клике на ссылку
document.querySelectorAll('.header_link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.header_links').classList.remove('open');
    document.querySelector('.burger').classList.remove('active');
  });
});

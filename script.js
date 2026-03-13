const trailer = document.querySelector('.trailer');

document.addEventListener('mousemove', (e) => {
  trailer.style.left = e.clientX - 6 + 'px';
  trailer.style.top = e.clientY - 6 + 'px';
});

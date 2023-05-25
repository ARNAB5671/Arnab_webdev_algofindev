const texts = document.querySelectorAll('.hoverable-text');

texts.forEach(text => {
  text.addEventListener('mouseenter', () => {
    text.style.fontSize = 'larger';
  });

  text.addEventListener('mouseleave', () => {
    text.style.fontSize = ''; // Reset font size to default
  });
});


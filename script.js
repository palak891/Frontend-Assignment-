function selectBox(index) {
  const cards = document.querySelectorAll('.card');
  const radios = document.querySelectorAll('input[type="radio"]');

  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active');
      radios[i].checked = true;
    } else {
      card.classList.remove('active');
      radios[i].checked = false;
    }
  });
}

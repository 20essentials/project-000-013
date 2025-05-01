const d = document;
const $modal = d.querySelector('.modal');
const $img = $modal.querySelector('img');

const toggleModal = show => {
  $modal.classList.toggle('aparecer', show);
  $modal.classList.toggle('desaparecer', !show);
};

d.addEventListener('click', e => {
  const target = e.target;

  if (target.matches('.equis') || target.closest('.modal')) {
    const isVisible = $modal.classList.contains('aparecer');
    toggleModal(!isVisible);
  }

  if (target.matches('.item')) {
    const valor = target.textContent.trim();
    $img.src = `assets/fotos/img-${valor}.avif`;
    toggleModal(true);
  }
});

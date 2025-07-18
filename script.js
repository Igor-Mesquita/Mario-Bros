const button = document.querySelector('.botao-enviar');
const form = document.querySelector('.form-orçamento');
const mask = document.querySelector('.mask-form');

button.addEventListener ('click', () => {
  form.style.left = '50%';
  form.style.transform = 'translateX(-50%)';
  mask.style.visibility = 'visible';
  mask.style.opacity = '1';
})

mask.addEventListener ('click', () => {
  form.style.left = '-305px';
  form.style.transform = 'translateX(0)';
  mask.style.opacity = '0';
  setTimeout(() => {
    mask.style.visibility = 'hidden'
  }, 1200)
})

form.addEventListener('submit', function(event) {
  const nome = document.getElementById('nome').value.trim()
  const email = document.getElementById('email').value.trim()

  if (nome === '' || email === '') {
    alert('Preencha todos os campos!')
    event.preventDefault();
  }
})
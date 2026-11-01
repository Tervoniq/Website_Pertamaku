const helloButton = document.getElementById('hello-button');
const message = document.getElementById('message');

helloButton.addEventListener('click', () => {
  message.textContent = 'Halo! Website saya berhasil!';
  message.hidden = false;
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && nameInput.value.trim() !== '') {
    document.getElementById('name-span').textContent = nameInput.value;
    nameInput.classList.add('hidden');
    document.getElementById('email-q').classList.remove('hidden');
    emailInput.classList.remove('hidden');
    emailInput.focus();
  }
});

emailInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && emailInput.value.trim() !== '') {
    emailInput.classList.add('hidden');
    document.getElementById('message-q').classList.remove('hidden');
    messageInput.classList.remove('hidden');
    messageInput.focus();
  }
});

messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && messageInput.value.trim() !== '') {
    messageInput.classList.add('hidden');
    document.getElementById('thanks-msg').classList.remove('hidden');
  }
});

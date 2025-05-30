const openBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('popupOverlay');
const closeBtn = document.getElementById('closePopupBtn');

// Show popup
openBtn.addEventListener('click', () => {
  overlay.classList.remove('hidden');
});

// Close on 'X'
closeBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
});

// Close by clicking outside popup
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.add('hidden');
  }
});

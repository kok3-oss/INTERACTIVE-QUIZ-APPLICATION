// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  if (form && msg) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      msg.classList.remove('hidden');
      form.reset();
    });
  }
});

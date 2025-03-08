const hamburgerButton = document.querySelector('#hamburger-button');
const mobileMenuModal = document.querySelector('#mobile-menu-modal');
const closeModalButton = document.querySelector('.close-modal');
const mobileMenuLinks = document.querySelectorAll('.mobile-nav a');

// Open modal when hamburger button is clicked
hamburgerButton.addEventListener('click', () => {
  mobileMenuModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

// Close modal when X is clicked
closeModalButton.addEventListener('click', () => {
  mobileMenuModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === mobileMenuModal) {
    mobileMenuModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Close modal when a link is clicked
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});
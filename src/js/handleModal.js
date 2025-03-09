<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
  // Get the modal
  const modal = document.getElementById('mobile-menu-modal');

  // Get the button that opens the modal
  const hamburgerBtn = document.getElementById('hamburger-button');

  // Get the <span> element that closes the modal
  const closeBtn = document.getElementsByClassName('close-modal')[0];

  // When the user clicks on the hamburger button, open the modal
  hamburgerBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // When the user clicks on <span> (x), close the modal
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });

  // Close the modal when a navigation link is clicked
  const navLinks = document.querySelectorAll('.mobile-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      modal.style.display = 'none';
    });
=======
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
>>>>>>> 27d55ea0ee1db5661f801b0f11ebda3f271b1100
  });
});
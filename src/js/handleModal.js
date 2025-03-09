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
  });
});
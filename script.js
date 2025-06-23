const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Form Validation and Order Confirmation

document.querySelector("form").addEventListener("submit", function(event) {
    
    const confirmSubmit = confirm("Are you sure you want to place the order?");
    
    if (!confirmSubmit) {
      event.preventDefault(); // stop form if canceled
    }
  });

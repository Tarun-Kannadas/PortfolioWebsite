function validationCheck(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const place = document.getElementById('place').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !phone || !place || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
}
  
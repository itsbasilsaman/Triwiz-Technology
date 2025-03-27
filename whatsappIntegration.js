document.getElementById("whatsapp-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  // Construct WhatsApp message
  let whatsappMessage = `Hello, I am ${firstName} ${lastName}.%0A
  Email: ${email}%0A
  Phone: ${phone}%0A
  Message: ${message}`;

  // WhatsApp URL with the formatted message
  let whatsappURL = `https://wa.me/918075347955?text=${whatsappMessage}`;

  // Open WhatsApp chat
  window.open(whatsappURL, "_blank");
});
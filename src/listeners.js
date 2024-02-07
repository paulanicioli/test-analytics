document
  .getElementById("contact-info")
  .addEventListener("submit", leadForm);

function leadForm() {
  dataLayer.push({'email': getElementById("email").value});
  console.log('Form submitted!');
}

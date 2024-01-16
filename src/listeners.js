document
  .getElementById("initial-form")
  .addEventListener("submit", leadForm);

function leadForm() {
  dataLayer.push({'email': getElementById("email").value);
  console.log('Form submitted!');
}

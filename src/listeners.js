document
  .querySelector(".initial-form")
  .addEventListener("submit", leadForm);

function leadForm() {
  dataLayer.push({'email': getElementById('name').value);
}

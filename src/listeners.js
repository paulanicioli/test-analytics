document
  .getElementById("contact-info")
  .addEventListener("submit", leadForm);

function leadForm() {
  dataLayer.push({'email': getElementById("email").value});
  console.log('Form submitted!');
}

// Button clicks listeners

function buttonClickEvent (event) {
  dataLayer.push({'event': event.id});
  document.getElementById('errorMessage').show();
}


window.bn_buttonClickEvent = buttonClickEvent;
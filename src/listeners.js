document
  .getElementById("contact-info")
  .addEventListener("submit", leadForm);

function leadForm() {
  dataLayer.push({'email': getElementById("email").value});
  console.log('Form submitted!');
}

// Button clicks listeners

function buttonClickEvent (event) {
  console.log("buttonClickEvent called!");
  console.log("event_id:",event.id);
  dataLayer.push({'event': event.id});

  const myToast = new bootstrap.Toast(document.getElementById('errorMessage'));
  myToast.show();

}


window.bn_buttonClickEvent = buttonClickEvent;
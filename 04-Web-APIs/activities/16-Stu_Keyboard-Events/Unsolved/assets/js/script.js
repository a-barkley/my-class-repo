function keydownAction(event) {
  // TODO: Complete keydown function

  console.log("Keydown")
  console.log(event.key, event.code)
  document.querySelector("#key").innerHTML = event.key
  document.querySelector("#code").innerHTML = event.code
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
	console.log("Keyup")
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

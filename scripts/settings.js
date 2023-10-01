// Get the modal and button elements
var modal = document.getElementById("settingsModal");
var openBtn = document.getElementById("openSettingsBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
	modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
	modal.style.display = "none";
}

// Event listeners to open and close the modal
openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", function (event) {
	if (event.target == modal) {
		closeModal();
	}
});

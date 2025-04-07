const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


const signInForm = document.querySelector('.sign-in-container form');
signInForm.addEventListener('submit', function (e) {
	e.preventDefault(); 

	const roleSelect = signInForm.querySelector('select[name="role"]');
	const selectedRole = roleSelect.value;

	if (selectedRole === "farmer") {
		window.location.href = "farmer.html";
	} else if (selectedRole === "buyer") {
		window.location.href = "buyer.html";
	} else {
		alert("Please select a role to continue.");
	}
});

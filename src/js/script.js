"use strict";

// ELEMENT/S
const mainEl = document.querySelector("main");
const formInputContainerEl = document.querySelector(
	".card__form-input-container"
);
const formInputEl = document.querySelector(".card__form-input");
const submitBtnEl = document.querySelector(".card__form-btn");
const dismissBtnEl = document.querySelector(".success__card-btn");

// FUNSTION/S
function addError() {
	formInputContainerEl.classList.add("error");
}

function removeError() {
	formInputContainerEl.classList.remove("error");
}

function success() {
	mainEl.classList.add("success");
	formInputEl.value = "";
}

function dismiss() {
	mainEl.classList.remove("success");
}

function validateEmail(email) {
	// -- Email validation regex
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// -- Testing the email, returns true if valid. Else, false
	return emailRegex.test(email);
}

function handleValidation() {
	const isValid = validateEmail(formInputEl.value);

	// -- If email is not valid, add error. Else, remove error and show success message
	if (!isValid) {
		addError();
	} else {
		removeError();
		success();
	}
}

// EVENT LISTENER/S
submitBtnEl.addEventListener("click", (e) => {
	e.preventDefault();
	handleValidation();
});
dismissBtnEl.addEventListener("click", dismiss);
formInputEl.addEventListener("input", removeError);

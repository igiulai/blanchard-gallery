function validateForm() {
	const nameInput = document.getElementById('name');
	const phoneInput = document.getElementById('phone');
	const nameError = document.getElementById('nameError');
	const phoneError = document.getElementById('phoneError');

	let valid = true;

	// Reset previous errors
	nameError.style.display = 'none';
	phoneError.style.display = 'none';
	nameInput.classList.remove('invalid');
	phoneInput.classList.remove('invalid');

	// Validate name
	if (!/^[а-яА-Я\s]+$/.test(nameInput.value)) {
		nameError.style.display = 'block';
		nameInput.classList.add('invalid');
		valid = false;
	}

	// Validate phone
	if (!/^\d{11}$/.test(phoneInput.value)) {
		phoneError.style.display = 'block';
		phoneInput.classList.add('invalid');
		valid = false;
	}

	if (valid) {
		nameInput.value = '';
		phoneInput.value = '';
		alert('Form submitted successfully!');
	}
}
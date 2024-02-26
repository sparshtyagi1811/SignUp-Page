function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var pdf = document.getElementById('pdf').value;

    if (name.trim() === '' || phone.trim() === '' || email.trim() === '' || dob.trim() === '' || pdf.trim() === '') {
        alert('All fields are required');
        return false;
    }

    var phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be 10 digits');
        return false;
    }

    return true;
}

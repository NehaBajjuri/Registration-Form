
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const userTableBody = document.querySelector('#userTable tbody');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const acceptTerms = document.getElementById('acceptTerms').checked;

        if (!acceptTerms) {
            alert('Please accept the terms.');
            return;
        }

        const currentDate = new Date();
        const dobDate = new Date(dob);
        const age = currentDate.getFullYear() - dobDate.getFullYear();

        if (age < 18 || age > 55) {
            alert('Date of birth must be between ages 18 and 55.');
            return;
        }

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${dob}</td>
            <td>${acceptTerms ? 'Yes' : 'No'}</td>
        `;
        userTableBody.appendChild(newRow);

        registrationForm.reset();
    });
});


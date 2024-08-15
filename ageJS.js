function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function validateDate() {
    const yearInput = document.getElementById('birth-year');
    const monthInput = document.getElementById('birth-month');
    const dayInput = document.getElementById('birth-day');

    let year = parseInt(yearInput.value);
    let month = parseInt(monthInput.value);
    let day = parseInt(dayInput.value);

    // Validate year
    if (year < 1900) year = 1900;
    if (year > new Date().getFullYear()) year = new Date().getFullYear();
    yearInput.value = year;

    // Validate month
    if (month < 1) month = 1;
    if (month > 12) month = 12;
    monthInput.value = month;

    // Validate day
    const maxDays = daysInMonth(month, year);
    if (day < 1) day = 1;
    if (day > maxDays) day = maxDays;
    dayInput.value = day;

    displayBirthday();
}

function displayBirthday() {
    const birthYear = document.getElementById('birth-year').value;
    const birthMonth = document.getElementById('birth-month').value;
    const birthDay = document.getElementById('birth-day').value;

    if (birthYear && birthMonth && birthDay) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const monthName = monthNames[parseInt(birthMonth) - 1];
        document.getElementById('birthday-display').textContent = `Birthday: ${monthName} ${birthDay}, ${birthYear}`;
    } else {
        document.getElementById('birthday-display').textContent = '';
    }
}

function calculateAge() {
    const birthYear = parseInt(document.getElementById('birth-year').value);
    const birthMonth = parseInt(document.getElementById('birth-month').value);
    const birthDay = parseInt(document.getElementById('birth-day').value);

    if (!birthYear || !birthMonth || !birthDay) {
        document.getElementById('result').textContent = 'Please enter a complete date.';
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    if (birthDate > today) {
        document.getElementById('result').textContent = 'Birthdate cannot be in the future.';
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('birth-year').setAttribute('max', currentYear);
    validateDate();
});
function clearFields() {
    document.getElementById('birth-year').value = '';
    document.getElementById('birth-month').value = '1'; // Set month to default value
    document.getElementById('birth-day').value = '';

    document.getElementById('birthday-display').textContent = '';
    document.getElementById('result').textContent = '';
}

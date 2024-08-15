function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    
    // Check if the date is valid
    if (isNaN(birthdate.getTime())) {
        document.getElementById('result').textContent = 'Please enter a valid date.';
        return;
    }
    
    // Check if the birthdate is in the future
    if (birthdate > today) {
        document.getElementById('result').textContent = 'Birthdate cannot be in the future.';
        return;
    }
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    document.getElementById('result').textContent = `You are ${age} years old.`;
}

// Set the max date for the input to today
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = yyyy + '-' + mm + '-' + dd;
    document.getElementById('birthdate').setAttribute('max', formattedToday);
});
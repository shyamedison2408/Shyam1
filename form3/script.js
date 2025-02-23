// Form validation functions
function validateBookName() {
    const field = document.getElementById('bookName');
    const error = document.getElementById('bookNameError');
    const value = field.value.trim();
    
    if(!value) return showError(field, error, 'Please enter the Book Name');
    if(/\d/.test(value)) return showError(field, error, 'Numeric values not allowed');
    if(value.length > 50) return showError(field, error, 'Book name length should not exceed 50');
    return clearError(field, error);
}

function validateAuthorName() {
    const field = document.getElementById('authorName');
    const error = document.getElementById('authorNameError');
    const value = field.value.trim();
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
    if(!value) return showError(field, error, 'Please enter the Author Name');
    if(/\d/.test(value)) return showError(field, error, 'Numeric values not allowed');
    if(specialChars.test(value)) return showError(field, error, 'Special Character not allowed');
    return clearError(field, error);
}

function validateEmail() {
    const field = document.getElementById('authorEmail');
    const error = document.getElementById('authorEmailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!field.value.trim()) return showError(field, error, 'Please enter the Email');
    if(!emailRegex.test(field.value)) return showError(field, error, 'Please enter valid Email Address');
    return clearError(field, error);
}

function validatePublishYear() {
    const field = document.getElementById('publishYear');
    const error = document.getElementById('publishYearError');
    const currentYear = new Date().getFullYear();
    
    if(!field.value) return showError(field, error, 'Please enter Publish Year');
    if(field.value > currentYear) return showError(field, error, 'Please enter valid Published year');
    return clearError(field, error);
}

function validatePrice() {
    const field = document.getElementById('price');
    const error = document.getElementById('priceError');
    
    if(!field.value.trim()) return showError(field, error, 'Please enter the Price');
    if(!/^\d+$/.test(field.value)) return showError(field, error, 'Alphabets values not allowed');
    return clearError(field, error);
}

function validateForm() {
    return [
        validateBookName(),
        validateAuthorName(),
        validateEmail(),
        validatePublishYear(),
        validatePrice()
    ].every(v => v);
}

// Form handling
document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if(validateForm()) {
        const bookDetails = {
            category: document.getElementById('category').value,
            bookName: document.getElementById('bookName').value.trim(),
            authorName: document.getElementById('authorName').value.trim(),
            authorEmail: document.getElementById('authorEmail').value.trim(),
            publishYear: document.getElementById('publishYear').value,
            price: document.getElementById('price').value
        };
        
        showResults(bookDetails);
    }
});

function showResults(book) {
    document.getElementById('formSection').style.display = 'none';
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';
    
    document.getElementById('bookDetails').innerHTML = `
        <p><strong>Category:</strong> ${book.category}</p>
        <p><strong>Book Name:</strong> ${book.bookName}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Author Email:</strong> ${book.authorEmail}</p>
        <p><strong>Published Year:</strong> ${book.publishYear}</p>
        <p><strong>Price:</strong> $${book.price}</p>
    `;
}

function clearForm() {
    document.getElementById('bookForm').reset();
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
    document.querySelectorAll('input, select').forEach(field => 
        field.classList.remove('invalid'));
}

function showForm() {
    document.getElementById('formSection').style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
}

// Real-time validation
document.getElementById('bookName').addEventListener('input', validateBookName);
document.getElementById('authorName').addEventListener('input', validateAuthorName);
document.getElementById('authorEmail').addEventListener('input', validateEmail);
document.getElementById('publishYear').addEventListener('input', validatePublishYear);
document.getElementById('price').addEventListener('input', validatePrice);

// Utility functions
function showError(field, errorElement, message) {
    field.classList.add('invalid');
    errorElement.textContent = message;
    return false;
}

function clearError(field, errorElement) {
    field.classList.remove('invalid');
    errorElement.textContent = '';
    return true;
}
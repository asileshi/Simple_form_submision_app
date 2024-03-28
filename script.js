document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const requestData = {};
    for (const [key, value] of formData.entries()) {
        requestData[key] = value;
    }

    // Mock API call
    fetch('http://example.com/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = 'Form submitted successfully!';
    })
    .catch(error => {
        document.getElementById('message').textContent = 'An error occurred while submitting the form.';
    });
});

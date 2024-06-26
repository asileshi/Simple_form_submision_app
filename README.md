# Simple Form Application

This is a simple full-stack web application for handling form submissions. The application consists of a frontend built with HTML, CSS, and JavaScript, and a backend built with Node.js and Express.js.

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd simple-form-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the backend server:
   ```bash
   node app.js
   ```

2. Open your web browser and navigate to `http://localhost:3000` to view the form.

3. Fill out the form with your name and email address, then click the "Submit" button to submit the form.

## Additional Information

- The backend API endpoint for form submission is `/api/submit`.
- Frontend validation is performed using HTML5 attributes such as `required` for required fields and email input type for email validation.
- Basic backend validation ensures that both name and email fields are provided before accepting form submissions.
- The `node_modules` directory is ignored using `.gitignore` to prevent it from being pushed to GitHub.

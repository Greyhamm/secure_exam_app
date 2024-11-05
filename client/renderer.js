const { loginUser, registerUser } = require('./auth'); // Import auth functions

// Initialize Monaco editor for coding questions
const monaco = require('monaco-editor');
monaco.editor.create(document.getElementById("editor"), {
  value: "// Start coding here",
  language: "javascript",
  theme: "vs-dark",
});

// Event handlers for registration and login buttons
function handleRegister() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  registerUser(email, password);
}

function handleLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  loginUser(email, password);
}

// Shows the instructor's dashboard
function showInstructorDashboard() {
  document.body.innerHTML = `
    <h2>Instructor Dashboard</h2>
    <button onclick="createExam()">Create New Exam</button>
  `;
}

// Shows the student's dashboard
function showStudentDashboard() {
  document.body.innerHTML = `
    <h2>Student Dashboard</h2>
    <p>Welcome to your exam dashboard!</p>
  `;
}

// Placeholder function for creating exams
function createExam() {
  alert("Exam creation interface coming soon!");
}

// Logs out the user and reloads the app
function logout() {
  sessionStorage.clear();
  window.location.reload();
}

module.exports = {
  handleRegister,
  handleLogin,
  showInstructorDashboard,
  showStudentDashboard,
};

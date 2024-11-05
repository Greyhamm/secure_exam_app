// Helper function for POST requests
async function postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  // Registers a new user
  async function registerUser(email, password) {
    const url = 'http://localhost:5001/register';
    const data = { email, password };
    try {
      const result = await postData(url, data);
      alert(result.message); // Show success or error message
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }
  
  // Logs in a user and directs them to the appropriate dashboard
  async function loginUser(email, password) {
    const url = 'http://localhost:5001/login';
    const data = { email, password };
  
    try {
      console.log('Sending login request...');
      const result = await postData(url, data);
      console.log('Login response received:', result);
  
      if (result.token) {
        console.log('Login successful:', result.token);
        sessionStorage.setItem('authToken', result.token);
        sessionStorage.setItem('userRole', result.role);
  
        // Redirect based on user role
        if (result.role === 'instructor') {
          showInstructorDashboard();
        } else {
          showStudentDashboard();
        }
      } else {
        alert(result.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
  
  
  module.exports = { registerUser, loginUser };
  
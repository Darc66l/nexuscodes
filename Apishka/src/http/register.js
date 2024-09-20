export const registerUser = async ({ name, email, password }) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      return data; // This should return the user data and token if registration is successful
    } catch (error) {
      throw new Error('Registration failed');
    }
  };
  
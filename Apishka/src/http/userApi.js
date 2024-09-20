import { $authHost, $host } from "./index";

// Register a user
export const registerUser = async (userData) => {
    /**
     * userData = {
     *   email: string,        // User's email address
     *   password: string,     // User's password
     *   fullname: string,     // User's full name
     *   role: string          // User's role, should be either 'participant' or 'mentor'
     * }
     */
    const { data } = await $host.post('api/user/register', userData);
    return data;
};

// Login a user
export const loginUser = async (loginData) => {
    /**
     * loginData = {
     *   email: string,        // User's email address
     *   password: string      // User's password
     * }
     */
    const { data } = await $host.post('api/user/login', loginData);
    localStorage.setItem('token', data.token); // Store JWT token in localStorage
    return data;
};

// Get all users (requires authentication)
export const fetchAllUsers = async () => {
    /**
     * No parameters required, this function retrieves all users.
     * Ensure that the request is authenticated by including the token.
     */
    const { data } = await $authHost.get('api/user/all');
    return data;
};

// Upload user avatar (requires authentication)
export const uploadUserAvatar = async (formData) => {
    /**
     * formData = FormData object containing the uploaded file
     * Example:
     * const formData = new FormData();
     * formData.append('avatar', selectedFile); // selectedFile is the avatar image file
     */
    const { data } = await $authHost.post('api/user/upload-avatar', formData);
    return data;
};

export const fetchUserProfile = async () => {
    const { data } = await $authHost.get('api/user/profile');
    return data;
  };
  
// Check if user is authenticated (requires authentication)
export const checkAuth = async () => {
    /**
     * No parameters required, this function checks if the token stored in localStorage is valid.
     * The response will return the token if the user is authenticated.
     */
    const { data } = await $authHost.get('api/user/check');
    return data;
};

// Logout a user (requires authentication)
export const logoutUser = async () => {
    /**
     * No parameters required, this function logs out the user by invalidating the token.
     * It removes the JWT token from localStorage and sends the token to the backend for blacklisting.
     */
    const { data } = await $authHost.post('api/user/logout');
    localStorage.removeItem('token'); // Remove JWT token from localStorage
    return data;
};

import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../http/userApi'; // Предположим, что эта функция получает данные профиля пользователя

const Profile = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    role: '',
    rating: 0,
  });

  useEffect(() => {
    const loadUserProfile = async () => {
      try {
        const profileData = await fetchUserProfile(); // Получаем данные профиля с сервера
        setUser(profileData);
      } catch (error) {
        console.log('Error loading profile:', error);
      }
    };

    loadUserProfile();
  }, []);

  return (
    <div className="profile-container bg-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Profile</h2>
      <div className="profile-details text-white">
        <p><strong>Full Name:</strong> {user.fullname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role === 'participant' ? 'Participant' : 'Mentor'}</p>
        <p><strong>Rating:</strong> <span className="text-yellow-400">{user.rating}</span></p>
      </div>
    </div>
  );
};

export default Profile;

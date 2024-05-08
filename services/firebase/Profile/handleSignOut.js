import React from 'react';
import { Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const auth = getAuth(); // Get the authentication object
      await signOut(auth); // Sign out the user
      console.log('User signed out successfully.');
      // Now you can navigate to your sign-in screen or perform any other actions
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Button title="Log Out" onPress={handleLogout} color="#135D66" />
  );
};

export default LogoutButton;

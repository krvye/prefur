import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; // Import the hook from React Navigation

const LogoutButton = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUid, setCurrentUid] = useState(null);
  const navigation = useNavigation(); // Get the navigation object

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setCurrentUid(user.uid);
      } else {
        setCurrentUser(null);
        setCurrentUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      console.log('Current UID:', currentUid); // Log current UID
      const auth = getAuth();
      await signOut(auth);
      console.log('User signed out successfully.');
      setCurrentUser(null);
      setCurrentUid(null);
      // Now you can navigate to your sign-in screen
      navigation.navigate('SignInScreen');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Button title="Log Out" onPress={handleLogout} color="#135D66" />
  );
};

export default LogoutButton;

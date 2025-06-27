import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { auth } from './firebaseConfig.js';
import MainNavigation from './navigation/MainNavigation';
import AuthScreen from './screens/AuthScreen';

// Configure Google Sign-In once at app start
GoogleSignin.configure({
  webClientId: '527994459698-0smcn7ncsnt2gdafnukvhjbuiegde4f1.apps.googleusercontent.com', // your webClientId
});

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (initializing) setInitializing(false);
    });
    return unsubscribe; // unsubscribe on unmount
  }, [initializing]);

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#008080" />
      </View>
    );
  }

  return user ? <MainNavigation /> : <AuthScreen />;
}

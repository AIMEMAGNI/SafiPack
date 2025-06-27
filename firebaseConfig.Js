// firebaseConfig.ts
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyAAzy39CO0gVceTEKYiPA0KGJg2bgFOpWY',
    appId: '1:527994459698:android:74299a917ab972eb7c4e2b',
    messagingSenderId: '527994459698',
    projectId: 'greenchoice-b61c0',
    storageBucket: 'greenchoice-b61c0.firebasestorage.app',
    databaseURL: 'https://greenchoice-b61c0-default-rtdb.firebaseio.com/',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const database = getDatabase(app);

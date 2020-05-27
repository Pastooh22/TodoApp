import React from 'react';
import * as Contacts from 'expo-contacts';

import Main from './src/Main';

export default function App() {

    const getContacts = () => {
        Contacts.getContactsAsync();
    };

    return (
            <Main />
    );
}

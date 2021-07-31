import 'react-native-gesture-handler';
import React from 'react';
import AuthStack from './src/navigation/AuthStack';
import AuthenticatedNavigation from './src/navigation/AuthenticatedNavigation';

const App = () => {
    return (
        <AuthenticatedNavigation />
    );
}

export default App;
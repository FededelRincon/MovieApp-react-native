import 'react-native-gesture-handler';

// import React from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
    return (
        <NavigationContainer>
            <Navigation />
        </NavigationContainer>
    )
};

export default App;

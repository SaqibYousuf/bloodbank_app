
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home/Home';
import PatientForm from './Screens/PatientForm/form';
import detail from './Screens/store/Detail/detail';
import Oppointment from './Screens/oppointment/Oppointment';
import Footers from './Screens/footer/Footer';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Patient Form" component={PatientForm} />
                <Stack.Screen name="Details" component={detail} />
                <Stack.Screen name="Oppointment Form" component={Oppointment} />
                <Stack.Screen name="Footer" component={Footers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
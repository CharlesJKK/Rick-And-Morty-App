import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WhowewherePage from '../screens/WhoWeWherePage';
import WelcomePage from '../screens/WelcomePage';
import HomePage from '../screens/HomePage';


const Stack = createNativeStackNavigator();

export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomePage" screenOptions={{headerShown: false}}>
                <Stack.Screen name="PeoplesPage" component={WhowewherePage}/>
                <Stack.Screen name="WelcomePage" component={WelcomePage}/>
                <Stack.Screen name="HomePage" component={HomePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
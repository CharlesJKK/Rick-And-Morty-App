import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WhowewherePage from '../screens/WhoWeWherePage';
import WelcomePage from '../screens/WelcomePage';


const Stack = createNativeStackNavigator();

export default function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false}}>
                <Stack.Screen name="PeoplesPage" component={WhowewherePage}/>
                <Stack.Screen name="Welcome" component={WelcomePage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
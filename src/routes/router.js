import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WhowewherePage from '../screens/WhoWeWherePage';
import WelcomePage from '../screens/WelcomePage';
import DrawerNavi from './Drawer';
import CharactersPage from '../screens/CharactersPage';


const Stack = createNativeStackNavigator();

export default function Router(){
    return(
            <Stack.Navigator initialRouteName="WelcomePage" screenOptions={{headerShown: false}}>
                <Stack.Screen name="PeoplesPage" component={WhowewherePage}/>
                <Stack.Screen name="WelcomePage" component={WelcomePage}/>
                <Stack.Screen name="Drawer" component={DrawerNavi}/>
            </Stack.Navigator>
    )
}
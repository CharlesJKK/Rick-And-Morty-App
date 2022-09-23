import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../screens/HomePage";
import Router from "./Router";

const Drawer = createDrawerNavigator();

export default function DrawerNavi(){
    return(
            <Drawer.Navigator 
            screenOptions={{headerShown: false, drawerPosition: "right",
             drawerActiveTintColor: '#286d19', drawerActiveBackgroundColor: '#9acf78',
             drawerStyle:{backgroundColor: '#10afc5', width: '60%'}}}> 
                <Drawer.Screen name="Página Inicial" component={HomePage}/>
            </Drawer.Navigator>
    )
}
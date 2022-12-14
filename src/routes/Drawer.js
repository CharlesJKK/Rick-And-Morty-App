import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomePage from "../screens/HomePage";
import FromLocation from "../screens/FromLocation";
import CharactersPage from "../screens/CharactersPage";
import EpisodeScreen from "../screens/EpisodesPage";

const Drawer = createDrawerNavigator();

export default function DrawerNavi(){
    return(
            <Drawer.Navigator 
            screenOptions={{headerShown: false, drawerPosition: "right", unmountOnBlur: true,
             drawerActiveTintColor: 'purple', drawerActiveBackgroundColor: '#9acf78', drawerInactiveBackgroundColor: 'grey',
             drawerStyle:{backgroundColor: '#10afc5', width: '60%', opacity: 0.9}}}> 
                <Drawer.Screen name="Página Inicial" component={HomePage}/>
                <Drawer.Screen name="Locais" component={FromLocation}/>
                <Drawer.Screen name="Personagens" component={CharactersPage}/>
                <Drawer.Screen name="Episódios" component={EpisodeScreen}/>
            </Drawer.Navigator>
    )
}
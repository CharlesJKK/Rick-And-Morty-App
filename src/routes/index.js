import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";

export default function RoutesIndex(){
    return(
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
    )
};
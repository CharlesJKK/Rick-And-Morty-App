import React, { useState, useEffect} from "react";
import { View, Image, Text} from "react-native";
import api from "../../api/api";

export default function FlatlistComponent({}){

    
    return(
            <View style={{backgroundColor: 'red', marginTop: 40, width: '80%', alignSelf: 'center', height: 350}}>
                <Image source={{}} style={{width: '50%', height: 200, borderRadius: 50, alignSelf: 'center'}}/>
            </View>
    )
}
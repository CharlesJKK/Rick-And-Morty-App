import React from "react";
import { View, Image, Text} from "react-native";

export default function FlatlistComponent({characters}){

    console.log(characters)

    return(
            <View style={{backgroundColor: 'red', marginTop: 40, width: '80%', alignSelf: 'center', height: 350}}>
                <Image />
            </View>
    )
}
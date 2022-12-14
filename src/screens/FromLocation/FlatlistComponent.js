import React from "react";
import { View, Text} from "react-native";

export default function FlatlistComponent({dimension, type, location}){

    function DimensionIsKnow(){
        if(dimension == 'unknown'){
            return 'Desconhecido'
        }else{
            return dimension
        }
    }

    return(
        <View style={{flexDirection: 'row', backgroundColor: 'purple',marginTop: 30 , marginLeft: 10, marginBottom: 30, borderRadius: 30, width: '45%', height: 100}}>
            <View style={{alignSelf:'center', marginLeft: 15}}  >
                    <Text style={{color: 'red', fontSize: 12,}}>Local: {location}</Text>
                    <Text style={{color: 'red', fontSize: 12}}>Tipo: {type}</Text>
                    <Text style={{color: 'red', fontSize: 12}}>Dimensão: {DimensionIsKnow()}</Text>
            </View>
        </View>
    )
}
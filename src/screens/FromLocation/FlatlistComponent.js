import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";

export default function FlatlistComponent({dimension, type, location}){

    function DimensionIsKnow(){
        if(dimension == 'unknown'){
            return 'Desconhecido'
        }else{
            return dimension
        }
    }

    return(
        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'purple', marginLeft: 10, marginBottom: 30, borderRadius: 30, width: '45%', height: 100}}>
            <View style={{alignSelf:'center', marginLeft: 15}}  >
                    <Text style={{color: 'red', fontSize: 12,}}>Local: {location}</Text>
                    <Text style={{color: 'red', fontSize: 12}}>Tipo: {type}</Text>
                    <Text style={{color: 'red', fontSize: 12}}>Dimensão: {DimensionIsKnow()}</Text>
            </View>
        </TouchableOpacity>
    )
}
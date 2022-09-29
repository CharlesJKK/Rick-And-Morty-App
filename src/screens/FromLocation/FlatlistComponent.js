import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FlatlistComponent({dimension, type, location, id}){
    const navigation = useNavigation()

    function DimensionIsKnow(){
        if(dimension == 'unknown'){
            return 'Desconhecido'
        }else{
            return dimension
        }
    }

    return(
        <TouchableOpacity style={{flexDirection: 'row', backgroundColor: 'purple',marginTop: 30 , marginLeft: 10, marginBottom: 30, borderRadius: 30, width: '45%', height: 100}}
        onPress={() => navigation.navigate('CharactersPage',{
            id: id
        })}>
            <View style={{alignSelf:'center', marginLeft: 15}}  >
                    <Text style={{color: 'red', fontSize: 12,}}>Local: {location}</Text>
                    <Text style={{color: 'red', fontSize: 12}}>Tipo: {type}</Text>
                    <Text style={{color: 'red', fontSize: 12}}>Dimensão: {DimensionIsKnow()}</Text>
            </View>
        </TouchableOpacity>
    )
}
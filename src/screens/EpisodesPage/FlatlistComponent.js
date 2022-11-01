import React from "react";
import { View, Text} from "react-native";

export default function FlatlistComponent({
    name,
    lancamento,
    episode
    })
    {

    return(
        <View style={{display: 'flex', flexDirection: 'row', backgroundColor: 'purple',marginTop: 30 , marginBottom: 30, borderRadius: 30, height: 250, marginLeft: 10, marginRight: 10, alignItems: 'center'}}>
            <View style={{marginLeft: '5%', justifyContent: 'space-between'}}  >
                <Text style={{marginBottom: '10%'}}>Nome do Episódio: {name}</Text>
                <Text style={{marginBottom: '10%'}}>Data de Lançamento: {lancamento}</Text>
                <Text style={{marginBottom: '10%'}}>Episódio e temporada: {episode}</Text>
            </View>
        </View>
    )
}
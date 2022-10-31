import React from "react";
import { View, Image, Text} from "react-native";

export default function FlatlistComponent({
    name,
    gender,
    img,
    status,
    species
}){

    function Genero(){
        if(gender == 'Male'){
            return <Text>Masculino</Text>
        }else if(gender == 'Female'){
            return <Text>Feminino</Text>
        }else{
            return <Text>Desconhecido</Text>
        }
    }

    function Status(){
        if(status == 'Alive'){
            return <Text>Vivo</Text>
        }else if(status == 'Dead'){
            return <Text>Morto</Text>
        }else{
            return <Text>Desconhecido</Text>
        }
    }

    
    return(
            <View style={{backgroundColor: '#2E8B57', marginTop: 20, marginBottom: '5%', width: '80%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                <View style={{width: '100%', marginLeft: '50%', marginTop: '5%', marginBottom: '5%'}}>
                    <Image source={{uri: `${img}`}} style={{width: '50%', height: 150, borderRadius: 100}}/>
                </View>
                <View style={{marginTop: '5%', marginBottom: '5%'}}>
                    <Text style={{fontFamily: 'BungeeSpice-Regular'}}>Nome: {name}</Text>
                    <Text style={{fontFamily: 'BungeeSpice-Regular'}}>Gênero: <Genero/></Text>
                    <Text style={{fontFamily: 'BungeeSpice-Regular'}}>Status: <Status/></Text>
                    <Text style={{fontFamily: 'BungeeSpice-Regular'}}>Espécie: {species}</Text>
                </View>
            </View>
    )
}
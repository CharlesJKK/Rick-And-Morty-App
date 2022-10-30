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
        if(gender == 'Alive'){
            return <Text>Vivo</Text>
        }else if(gender == 'Dead'){
            return <Text>Morto</Text>
        }else{
            return <Text>Desconhecido</Text>
        }
    }


    return(
            <View style={{backgroundColor: 'red', marginTop: 20, marginBottom: 40, width: '80%', alignSelf: 'center', height: 350, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                <View style={{width: '100%', marginLeft: '50%', marginTop: '5%'}}>
                    <Image source={{uri: `${img}`}} style={{width: '50%', height: '70%', borderRadius: 100}}/>
                </View>
                <View>
                    <Text>Nome: {name}</Text>
                    <Text>Gênero: <Genero/></Text>
                    <Text>Status: <Status/></Text>
                    <Text>Espécie: {species}</Text>
                </View>
            </View>
    )
}
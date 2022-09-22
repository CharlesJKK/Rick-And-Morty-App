import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import ButtonGoBack from "../../components/ButtonGoBack";
import api from "../../api/api";

export default function HomePage(){

    const [teste, setTeste] = useState()

    const getInfos = async () => {
        const res = await api.get('/character/1');
        try{
            setTeste(res.data)
        } catch(error){}
    }

    useEffect(() => {
        getInfos()
      }, []);

    return(
        <View style={{flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#222222'}}>
            <View>
                <Text style={{fontFamily: 'BungeeSpice-Regular', alignSelf: 'center'}}>Bem-vindo!</Text>
                <Text style={{fontFamily: 'BungeeSpice-Regular', alignSelf: 'center'}}>Arraste pra esquerda para abrir o menu</Text>
            </View>
            <View style={{position: 'absolute', top: 10, left: 30}}>
                <ButtonGoBack/>
            </View>
            <Image source={require('../../../assets/teste.gif')} style={{maxHeight: '50%', maxWidth: '100%'}}/>
        </View>
    )
}
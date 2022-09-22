import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from "react-native";
import api from "../../api/api";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';


export default function WelcomePage(){

    const navigation = useNavigation();
    /*const [teste, setTeste] = useState()
    console.log(teste)

    const getInfos = async () => {
        const res = await api.get('/character');
        try{
            setTeste(res.data.results)
        } catch(error){}
    }

    useEffect(() => {
        getInfos()
      }, []);
      */



    return(
        <SafeAreaView style={styles.conteiner}>
            <Image source={require('../../../assets/logo.png')} style={{width: '100%', height: '20%', position: 'absolute', top: 50}}/>
            <View style={{width: '100%'}}>
                <Text style={{color: 'black', alignSelf: 'center'}}>Seja bem vindo ao aplicativo sobre Rick And Morty. {'\n'}Aqui você irá encontrar a maioria das informações{'\n'} sobre o seriado.</Text>
            </View>
            <View style={{marginTop: 100}}>
                <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius: 50}}>
                    <View style={{width: 120, height: 30, backgroundColor: '#3CB371', justifyContent: 'center', alignItems: 'center', borderRadius: 50}}>
                        <Text style={{color: 'black',}}>ENTRAR</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{borderWidth: 1, borderColor: 'white', borderRadius: 50, marginTop: 20}} onPress={() => navigation.navigate('PeoplesPage')}>
                    <View style={{width: 120, height: 30, backgroundColor: '#3CB371', justifyContent: 'center', alignItems: 'center', borderRadius: 50}}>
                        <Text style={{color: 'black',}}>QUEM SOMOS?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
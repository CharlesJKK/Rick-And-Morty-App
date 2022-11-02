import React from "react";
import { View, Text, Image } from "react-native";
import ButtonGoBack from "../../components/ButtonGoBack";
import styles from "./style";
import Icon from "react-native-vector-icons/Entypo";

export default function HomePage(){

    return(
        <View style={styles.conteiner}>
            <View>
                <Text style={styles.txt}>Bem-vindo!</Text>
                <Text style={styles.txt}>Arraste pra esquerda para abrir o menu</Text>
                <Icon name='align-left' size={30} color={'#10afc5'} style={styles.icon}/>
            </View>
            <View style={{position: 'absolute', top: 10, left: 30}}>
                <ButtonGoBack/>
            </View>
            <Image source={require('../../../assets/teste.gif')} style={styles.img}/>
        </View>
    )
}
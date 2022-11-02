import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from "react-native";
import api from "../../api/api";
import styles from "./style";
import { useNavigation } from '@react-navigation/native';


export default function WelcomePage(){

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.conteiner}>
            <Image source={require('../../../assets/logo.png')} style={styles.img}/>
            <View style={{width: '100%'}}>
                <Text style={styles.txt}>Seja bem vindo ao aplicativo sobre Rick And Morty.</Text>
                <Text style={styles.txt}>Aqui você irá encontrar a maioria das informações sobre o seriado.</Text>
            </View>
            <View style={styles.conteinersButtons}>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Drawer')}>
                    <View style={styles.conteinertxtButtons}>
                        <Text style={{color: 'black',}}>ENTRAR</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('PeoplesPage')}>
                    <View style={styles.conteinertxtButtons}>
                        <Text style={{color: 'black',}}>QUEM SOMOS?</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
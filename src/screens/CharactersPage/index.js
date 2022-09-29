import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";
import FlatlistComponent from "./FlatlistComponent";

export default function CharactersPage({route}){

    const { id } = route.params;

    const [characters, setCharacters] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getInfos = async () => {
        const res = await api.get(`/location/${id}`);
        try{
            setCharacters(res?.data.residents)
            setTimeout(() => {setIsLoading(false)}, 2000);
        } catch(error){}
    }

    

    useEffect(() => {
        getInfos()
      }, []);

    function Header(){
        return(
            <View style={{alignSelf:'center', marginTop: 60, backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 20, width: '70%'}}>
                <Text style={{fontSize: 30, fontFamily: 'BungeeSpice-Regular', color: 'green', alignSelf: 'center'}}>Personagens</Text>
            </View>
        )
    }

    const renderItem = ({item}) => (
        <FlatlistComponent characters={characters}
        />
    )

    return(
        <SafeAreaView>
            <ImageBackground source={require('../../../assets/charactersbackground.png')} style={{maxWidth: '100%', height: '100%'}}>
                <FlatList
                data={characters}
                ListHeaderComponent={Header}
                renderItem={renderItem}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}
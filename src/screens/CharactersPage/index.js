import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";
import FlatlistComponent from "./FlatlistComponent";
import ButtonGoBack from "../../components/ButtonGoBack";
import LoadingFL from "../../components/LoadingFL";

export default function CharactersPage(){

    const [characters, setCharacters] = useState('')
    const [pagina, setPagina] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    console.log(characters)


    const getInfos = async () => {
        await api.get(`/character/?page=${pagina}`)
            .then((res) => {
                const current = res.data.results;
                setCharacters(prev => [...prev, ...current]);
                setPagina(prev => prev + 1);
                setTimeout(() => {setIsLoading(false)}, 2000);
            }).catch(err => console.log(`Opa, erro nisso aqui ${err}`))
    }

    useEffect(() => {
        getInfos()
      }, []);

    function Header(){
        return(
            <View style={{alignSelf:'center', marginTop: 60, backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: 20, width: '70%'}}>
            <View style={{width: '100%', bottom: 80, left: -40}}>
                <ButtonGoBack/>
            </View>
                <Text style={{fontSize: 30, fontFamily: 'BungeeSpice-Regular', color: 'green', alignSelf: 'center'}}>Personagens</Text>
            </View>
        )
    }

    const renderItem = ({item}) => (
        <FlatlistComponent
        name={item.name}
        gender={item.gender}
        img={item.image}
        status={item.status}
        species={item.species}
        />
    )

    return(isLoading ? <LoadingFL/> :
        <SafeAreaView>
            <ImageBackground source={require('../../../assets/charactersbackground.png')} style={{maxWidth: '100%', height: '100%'}}>
                <FlatList
                data={characters}
                ListHeaderComponent={Header}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={<ActivityIndicator color={'#2E8B57'} size={'large'}/>}
                onEndReached={getInfos}
                onEndReachedThreshold={0.2}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}
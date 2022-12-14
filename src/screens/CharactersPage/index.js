import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../api/api";
import FlatlistComponent from "./FlatlistComponent";
import ButtonGoBack from "../../components/ButtonGoBack";
import LoadingFL from "../../components/LoadingFL";
import styles from "./style";

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
            <View style={styles.conteinerHeader}>
            <View style={{width: '100%', bottom: 80, left: -40}}>
                <ButtonGoBack/>
            </View>
                <Text style={styles.txtPersonagens}>Personagens</Text>
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
            <ImageBackground source={require('../../../assets/charactersbackground.png')} style={styles.conteinerImg}>
                <FlatList
                data={characters}
                ListHeaderComponent={Header}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListFooterComponent={<ActivityIndicator color={'#2E8B57'} size={'large'}/>}
                onEndReached={getInfos}
                onEndReachedThreshold={0.1}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}
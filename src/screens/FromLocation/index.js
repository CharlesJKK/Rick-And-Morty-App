import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ImageBackground, ActivityIndicator } from "react-native";
import api from "../../api/api";
import FlatlistComponent from "./FlatlistComponent";
import LoadingFL from "../../components/LoadingFL"
import ButtonGoBack from "../../components/ButtonGoBack";
import styles from "./style";

export default function FromLocation(){

    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [pagina, setPagina] = useState(1);

    const getInfos = async () => {
        await api.get(`/location?page=${pagina}`)
            .then((res) => {
                const current = res.data.results;
                setLocation(prev => [...prev, ...current]);
                setPagina(prev => prev + 1);
                setTimeout(() => {setIsLoading(false)}, 2000);
            }).catch(err => console.log(`Opa, erro nisso aqui ${err}`))
    }

    useEffect(() => {
        getInfos()
      }, []);



    function Header(){
        return(
            <ImageBackground source={require('../../../assets/fundoflatlist.jpg')} style={styles.conteinerHeader}>
                <View style={{width: '100%', bottom: 80, left: 20}}>
                    <ButtonGoBack/>
                </View>
                <View style={styles.conteinerTxtLocalidades}>
                    <Text style={styles.txtLocalidades}>Localidades</Text>
                </View>
                <View style={styles.line}></View>
            </ImageBackground>
        )
    }

    const renderItem = ({item}) => (
        <FlatlistComponent
        dimension={item.dimension}
        type={item.type}
        location={item.name}
        />
    )

    return( 
        isLoading ? 
        <LoadingFL/> 
        :
            <ImageBackground source={require('../../../assets/planets.png')} style={styles.conteinerImg}>
                <FlatList
                    numColumns={2}
                    data={location}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    ListHeaderComponent={Header}
                    onEndReached={getInfos}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={<ActivityIndicator color={'purple'} size={'large'}/>}
                />
            </ImageBackground>
    )
}
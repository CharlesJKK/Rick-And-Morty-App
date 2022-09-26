import React, {useState, useEffect} from "react";
import { View, Text, FlatList, Image, ImageBackground } from "react-native";
import api from "../../api/api";
import FlatlistComponent from "./FlatlistComponent";
import LoadingFL from "./LoadingFL";

export default function FromLocation(){

    const [location, setLocation] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getInfos = async () => {
        const res = await api.get('/location');
        try{
            setLocation(res.data.results)
            setTimeout(() => {setIsLoading(false)}, 2000);
        } catch(error){}
    }

    useEffect(() => {
        getInfos()
      }, []);



    function Header(){
        return(
            <ImageBackground source={require('../../../assets/fundoflatlist.jpg')} style={{maxWidth: '100%', height: 200, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{backgroundColor: '#fe6fff', borderWidth: 3, borderColor: '#c2063d', borderRadius: 50, opacity: 0.9}}>
                    <Text style={{fontFamily: 'BungeeSpice-Regular', padding: 5, fontSize: 20, color: 'purple'}}>Localidades</Text>
                </View>
                <View style={{borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.4)', width: '100%', top:78}}></View>
            </ImageBackground>
        )
    }

    const renderItem = ({item}) => (
        <FlatlistComponent
        id={item.id}
        dimension={item.dimension}
        type={item.type}
        location={item.name}
        residents={item.residents}
        />
    )

    return( 
        isLoading ? 
        <LoadingFL/> 
        :
            <ImageBackground source={require('../../../assets/planets.png')} style={{maxWidth: '100%'}}>
                <FlatList
                    numColumns={2}
                    data={location}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    ListHeaderComponent={Header}
                />
            </ImageBackground>
    )
}
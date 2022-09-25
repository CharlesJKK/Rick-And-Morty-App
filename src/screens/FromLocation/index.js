import React, {useState, useEffect} from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";
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
            <View style={{justifyContent: 'center', alignItems: 'center'}}>  
                <Image style={{alignSelf: 'flex-end', maxHeight: '60%', maxWidth: '80%', alignSelf: 'center'}} source={require('../../../assets/button.png')}/>
                <Text style={{fontSize: 30, alignSelf: 'center'}}>Localidades</Text>
            </View>
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
        <View style={{flex: 1, backgroundColor: '#222222', justifyContent: 'center', alignItems: 'center'}}>
            
            <FlatList
                numColumns={2}
                ListHeaderComponent={Header}
                data={location}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}
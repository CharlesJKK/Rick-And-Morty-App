import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList} from 'react-native'
import ButtonGoBack from '../../components/ButtonGoBack'
import api from '../../api/api';
import FlatlistComponent from './FlatlistComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';



export default function EpisodeScreen(){


    const [episodes, setEpisodes] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [pagina, setPagina] = useState(1);

    const getInfos = async () => {
        await api.get(`/episode?page=${pagina}`)
            .then((res) => {
                setEpisodes(res.data.results);
                setTimeout(() => {setIsLoading(false)}, 2000);
            }).catch(err => console.log(`Opa, erro nisso aqui ${err}`))
    }

    useEffect(() => {
        getInfos()
      }, [pagina]);

      function PagePlus(){
        if(pagina < 3){
            return setPagina(pagina + 1)
        }
      }

      function PageDown(){
        if(pagina > 1){
            return setPagina(pagina - 1)
        }
      }

    function Header(){
        return(
            <View style={{backgroundColor: '#7B68EE', width: '100%', height: 220, alignSelf: 'center', justifyContent: 'center'}}>
                <View style={{position: 'absolute', top: '5%', marginLeft: '5%'}}>
                    <ButtonGoBack/>
                </View>
                <Text style={{color: '#7FFFD4', alignSelf: 'center', fontSize: 30, fontFamily: 'BungeeSpice-Regular', marginTop: '15%'}}>Episódios</Text>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <TouchableOpacity style={{margin: 20}} onPress={() => PageDown()}>
                        <Icon name='leftsquare' size={30} color='#4B0082'/>
                    </TouchableOpacity>
                    <Text style={{marginTop:20, fontSize: 20}}>
                        Página {pagina}
                    </Text>
                    <TouchableOpacity style={{margin: 20}} onPress={() => PagePlus()}>
                        <Icon name='rightsquare' size={30} color='#4B0082'/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    const renderItem = ({item}) => (
        <FlatlistComponent
        name={item.name}
        lancamento={item.air_date}
        episode={item.episode}
        />
    )

    return(
        <SafeAreaView style={{backgroundColor: '#4B0082'}}>
            <FlatList
            data={episodes}
            ListHeaderComponent={Header}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
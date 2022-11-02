import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, FlatList} from 'react-native'
import ButtonGoBack from '../../components/ButtonGoBack'
import api from '../../api/api';
import FlatlistComponent from './FlatlistComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';



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
            <View style={styles.conteinerHeader}>
                <View style={{position: 'absolute', top: '5%', marginLeft: '5%'}}>
                    <ButtonGoBack/>
                </View>
                <Text style={styles.txtepisodes}>Episódios</Text>
                <View style={styles.conteinerBotoes}>
                    <TouchableOpacity style={styles.buttons} onPress={() => PageDown()}>
                        <Icon name='leftsquare' size={30} color='#4B0082'/>
                    </TouchableOpacity>
                    <Text style={{marginTop:20, fontSize: 20}}>
                        Página {pagina}
                    </Text>
                    <TouchableOpacity style={styles.buttons} onPress={() => PagePlus()}>
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
        <SafeAreaView style={styles.conteiner}>
            <FlatList
            data={episodes}
            ListHeaderComponent={Header}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            />
        </SafeAreaView>
    )
}
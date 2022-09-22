import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

function WhowewherePage() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#2E8B57', flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{position: 'absolute', top: 40, width: 60, height: 30, backgroundColor: '#3CB371', borderWidth: 1, borderColor: 'white', borderRadius: 50 , justifyContent: 'center', alignItems: 'center'}}>
        <Icon name='caretleft' color={'black'}/>
      </TouchableOpacity>
      <View style={{position: 'absolute', width: '100%', top: 120}}>
        <Text style={{alignSelf: 'center', fontSize: 30, color: 'green', right: 20, fontFamily: 'BungeeSpice-Regular'}}>Quem nós somos ?</Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 80, bottom: 40}}>
        <Image source={require('../../../assets/charles.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'black', fontFamily: 'BungeeSpice-Regular'}}>Charles Junior</Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 80, bottom: 40}}>
        <Image source={require('../../../assets/andre.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'black', fontFamily: 'BungeeSpice-Regular'}}>André Lucas</Text>
      </View>
    </View>
  );
}

export default WhowewherePage
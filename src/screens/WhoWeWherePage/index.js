import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ButtonGoBack from '../../components/ButtonGoBack';

function WhowewherePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#222222', flexDirection: 'row'}}>
      <ButtonGoBack/>
      <View style={{position: 'absolute', width: '100%', top: 120}}>
        <Text style={{alignSelf: 'center', fontSize: 30, color: 'green', right: 20, fontFamily: 'BungeeSpice-Regular'}}>Quem nós somos ?</Text>
      </View>
      <View style={{borderWidth: 3, borderRadius: 80, bottom: 40, borderColor: 'green'}}>
        <Image source={require('../../../assets/charles.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'green', fontFamily: 'BungeeSpice-Regular'}}>Charles Junior</Text>
      </View>
      <View style={{borderWidth: 3, borderRadius: 80, bottom: 40, borderColor: 'green'}}>
        <Image source={require('../../../assets/andre.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'green', fontFamily: 'BungeeSpice-Regular'}}>André Lucas</Text>
      </View>
    </View>
  );
}

export default WhowewherePage
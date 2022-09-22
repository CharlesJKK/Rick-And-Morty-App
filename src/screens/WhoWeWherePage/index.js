import * as React from 'react';
import { Text, View, Image } from 'react-native';

function WhowewherePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#2E8B57', flexDirection: 'row'}}>
      <View style={{position: 'absolute', width: '100%', top: 120}}>
        <Text style={{alignSelf: 'center', fontSize: 35, color: 'black', right: 20}}>Quem nós somos ?</Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 80, bottom: 40}}>
        <Image source={require('../../../assets/charles.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'black'}}>Charles Junior</Text>
      </View>
      <View style={{borderWidth: 2, borderRadius: 80, bottom: 40}}>
        <Image source={require('../../../assets/andre.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'black'}}>André Lucas</Text>
      </View>
    </View>
  );
}

export default WhowewherePage
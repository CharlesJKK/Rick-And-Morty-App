import * as React from 'react';
import { Text, View, Image} from 'react-native';
import ButtonGoBack from '../../components/ButtonGoBack';

function WhowewherePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222', flexDirection: 'row'}}>
      <View style={{position: 'absolute', top: 10, left: 30}}>
        <ButtonGoBack/>
      </View>
      <View style={{position: 'absolute', width: '100%', top: 120, left: '5%'}}>
        <Text style={{alignSelf: 'center', fontSize: 30, color: 'green', right: 20, fontFamily: 'BungeeSpice-Regular'}}>Quem eu sou ?</Text>
      </View>
      <View style={{borderWidth: 3, borderRadius: 80, bottom: 40, borderColor: 'green'}}>
        <Image source={require('../../../assets/charles.jpg')} style={{height: 150, width: 150, borderRadius: 80}}/>
        <Text style={{position: 'absolute', alignSelf: 'center', bottom: -30, color: 'green', fontFamily: 'BungeeSpice-Regular'}}>Charles Junior</Text>
      </View>
    </View>
  );
}

export default WhowewherePage
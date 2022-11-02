import * as React from 'react';
import { Text, View, Image} from 'react-native';
import ButtonGoBack from '../../components/ButtonGoBack';
import styles from './style';

function WhowewherePage() {
  return (
    <View style={styles.conteiner}>
      <View style={{position: 'absolute', top: 10, left: 30}}>
        <ButtonGoBack/>
      </View>
      <View style={styles.conteinerQuemsou}>
        <Text style={styles.txt}>Quem eu sou ?</Text>
      </View>
      <View style={styles.conteinerImgName}>
        <Image source={require('../../../assets/charles.jpg')} style={styles.img}/>
        <Text style={styles.myName}>Charles Junior</Text>
      </View>
    </View>
  );
}

export default WhowewherePage
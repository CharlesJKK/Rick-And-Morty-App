import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation} from '@react-navigation/native';

export default function ButtonGoBack() {
  const navigation = useNavigation();

  function toNavigate() {
    navigation.goBack();
  }

  return (
    <View style={{width: '100%', position: 'absolute', top: 40}}>
        <TouchableOpacity onPress={toNavigate} style={{width: 60, height: 30, backgroundColor: '#3CB371', borderWidth: 1, borderColor: 'white', borderRadius: 50 , justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start'}}>
        <Icon name={'caretleft'} color={'black'}
        />
        </TouchableOpacity>
    </View>
  );
}
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
     flex: 1, 
     justifyContent: 'center', 
     alignItems: 'center', 
     backgroundColor: '#222222', 
     flexDirection: 'row'
    },
    img:{
        height: 150, width: 150, 
        borderRadius: 80
    },
    myName:{
        position: 'absolute', 
        alignSelf: 'center', 
        bottom: -30, 
        color: 'green', 
        fontFamily: 'BungeeSpice-Regular'
    },
    conteinerImgName:{
        borderWidth: 3, 
        borderRadius: 80, 
        bottom: 40, 
        borderColor: 'green'
    },
    txt:{
        alignSelf: 'center', 
        fontSize: 30, 
        color: 'green', 
        right: 20, 
        fontFamily: 'BungeeSpice-Regular'
    },conteinerQuemsou:{
        position: 'absolute', 
        width: '100%', 
        top: 120, 
        left: '5%'
    }
})

export default styles;
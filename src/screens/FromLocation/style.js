import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteinerImg:{
        maxWidth: '100%'
    },
    conteinerHeader:{
        maxWidth: '100%', 
        height: 200, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    conteinerTxtLocalidades:{
        backgroundColor: '#fe6fff', 
        borderWidth: 3, 
        borderColor: '#c2063d', 
        borderRadius: 50, 
        opacity: 0.9
    },
    txtLocalidades:{
        fontFamily: 'BungeeSpice-Regular', 
        padding: 5, 
        fontSize: 20, 
        color: 'purple'
    },
    line:{
        borderWidth: 1, 
        borderColor: 'rgba(255, 255, 255, 0.4)', 
        width: '100%', 
        top:78
    }
})

export default styles
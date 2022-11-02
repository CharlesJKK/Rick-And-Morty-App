import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        backgroundColor: '#222222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        width: '100%', 
        height: '20%', 
        position: 'absolute', 
        top: 50
    },
    txt:{
        color: 'green', 
        alignSelf: 'center', 
        fontFamily: 'BungeeSpice-Regular', 
        fontSize: 11
    },
    conteinersButtons:{
        marginTop: 100
    },
    buttons:{
        borderWidth: 1, 
        borderColor: 'white', 
        borderRadius: 50, 
        margin: 10
    },
    conteinertxtButtons:{
        width: 120, 
        height: 30, 
        backgroundColor: '#3CB371', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 50
    }
})

export default styles;
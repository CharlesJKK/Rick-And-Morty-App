import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    conteiner:{
        flex: 1, 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        backgroundColor: '#222222'
    },
    txt:{
        fontFamily: 'BungeeSpice-Regular', 
        alignSelf: 'center'
    },
    img:{
        maxHeight: '50%', 
        maxWidth: '100%'
    },
    icon:{
        alignSelf: 'flex-end', 
        left: 25
    }
})

export default styles
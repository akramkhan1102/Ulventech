import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    button: {
        width: Dimensions.get('window').width - 40,
        alignSelf: 'center',
        borderWidth: 1,
        padding: 10,
        marginVertical: 20,
        borderRadius: 5,
        backgroundColor: '#673ab7',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 15,
        color: '#fff'
    }
})

export default styles
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:"#fff",
        padding: 20
    },
    titulo:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#363535',
        marginBottom: 10

    },
    subtitulo:{
        fontSize: 16,
        color: '#666',
        marginBottom: 20

    },
    input:{
        width:'100%',
        height: 50,
        backgroundColor: '#ffedf1',
        borderRadius: 10,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor:'#ddd',
        marginBottom: 20
    },
    button:{
        backgroundColor: '#e6194c',
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        borderRadius:10
    },
    buttonText:{
        fontWeight: 'bold',
        fontSize:18,
        color: '#fff'
    },
    card:{
        borderWidth: 1,
        backgroundColor: '#ffedf1',
        marginTop: 30,
        width: '100%',
        borderRadius: 10,
        padding: 20,
        borderColor: '#ddd',
        shadowColor: 'black'
    },
    cardTitle:{
        fontSize:16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom:10
    },
    cardText:{
        fontSize: 16,
        color: '#666'
    }
})

export default styles;
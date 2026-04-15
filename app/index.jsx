import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
const Home = () => {
    return (
        <View style={styles.container}>
           
            <Link href="/stretch-index" style={styles.card}>Stretch-index</Link>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fbff00',
        padding: 50,
        borderRadius: 5,
        boxShadow: '4px 4px #828b00',

    },
})
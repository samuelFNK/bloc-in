import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
const Home = () => {
    return (
        <View style={styles.container}>
           
            <Link href="/stretch-index" style={styles.card}>Stretch</Link>
            
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
        fontSize: 15,
        backgroundColor: '#ffffff',
        padding: 50,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: 'transparent',

    },
})
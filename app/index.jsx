import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Homeeeeeeeeeee</Text>
            <Text>wowwww</Text>

            <View style={styles.card}>
                <Text>cards</Text>
            </View>

            <Link href="/strech-index">Strech index link</Link>
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
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px #828b00',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
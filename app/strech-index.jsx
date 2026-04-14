import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const StretchIndex = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Strech index page...</Text>

            <Link href="/">Home index link</Link>
        </View>
    )
}

export default StretchIndex

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})
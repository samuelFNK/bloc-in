import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const StretchIndex = () => {
    return (
        <View style={styles.card_container}>
            
            <Text style={styles.title}>Programs</Text>

            <Link href="/light-sp" style={styles.program_card}>Light</Link>
            <Link href="/medium-sp" style={styles.program_card}>Medium</Link>  
            <Link href="/full-sp" style={styles.program_card}>Full</Link> 
                    
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
    card_container: {
        backgroundColor: '#ffe600',
        padding: 50,
        borderRadius: 5,
        boxShadow: '4px 4px #d8c300',

    },
    program_card: {
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 50,
        margin:5,
        

    },
    title: {
        fontSize: 20,
    }
})
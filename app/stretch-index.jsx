import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

const StretchIndex = () => {
    return (
        <View style={styles.card_container}>

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
        flex: 1,
        backgroundColor: '#e7e7e7',
        padding: 50,
        borderRadius: 5,
    },
    program_card: {
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 50,
        margin:12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: 'transparent',
        

    },
})
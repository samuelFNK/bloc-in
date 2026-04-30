import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { theme } from '../../theme'

const StretchIndex = () => {
    return (
        <View style={styles.card_container}>

            <Link href="/stretching/light-sp" style={styles.program_card}>Light</Link>
            <Link href="/stretching/medium-sp" style={styles.program_card}>Medium</Link>  
            <Link href="/stretching/full-sp" style={styles.program_card}>Full</Link> 
                    
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
        backgroundColor: theme.colors.background,
        padding: theme.spacing.huge,
    },
    program_card: {
        fontFamily: theme.font.family,
        color: theme.colors.text,
        fontSize: theme.font.sizeMedium,
        textAlign: 'center',
        backgroundColor: theme.colors.cardBackground,
        borderRadius: theme.shape.softRadius,
        padding: theme.spacing.huge,
        margin: theme.spacing.medium,
        elevation: theme.shape.smallElevation,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: theme.shape.shadowWidth, height: theme.shape.shadowHeight },
        shadowOpacity: theme.shape.shadowOpacity,
        shadowRadius: theme.shape.shadowRadius,
        borderWidth: theme.shape.borderWidth,
        borderColor: 'transparent',
        

    },
})
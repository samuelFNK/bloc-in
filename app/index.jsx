import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { theme } from '../theme'

const Home = () => {
    return (
        <View style={styles.container}>
           
            <Link href="/stretch-index" style={styles.card}>
                Strech
            </Link>
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
    },
    card: {
        fontFamily: theme.font.family, 
        fontSize: theme.font.sizeMedium,
        color: theme.colors.text,
        backgroundColor: theme.colors.cardBackground,
        padding: theme.spacing.huge,
        borderRadius: theme.shape.softRadius,
        elevation: theme.shape.smallElevation,
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: theme.shape.shadowWidth, height: theme.shape.shadowHeight },
        shadowOpacity: theme.shape.shadowOpacity,
        shadowRadius: theme.shape.shadowRadius,
        borderWidth: theme.shape.borderWidth,
        borderColor: 'transparent',

    },
})
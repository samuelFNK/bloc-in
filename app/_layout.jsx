import { View } from 'react-native'
import { Stack } from 'expo-router'
import { Header } from '../components/Header'
import { theme } from '../theme'

const RootLayout = () => {

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Stack screenOptions={{
                animation: 'fade',

                header: ({ options, navigation }) => {
                    if (options.headerShown === false){
                        return null;
                    }
                    return (
                        <Header title={options.title} canGoBack={navigation.canGoBack()}/>
                    );
                },
            }}>
                <Stack.Screen name="index" options={{ headerShown: false}}/>
                <Stack.Screen name="stretch-index" options={{ title: 'Programs'}}/>
                <Stack.Screen name="light-sp" options={{ title: 'Light'}}/>
                <Stack.Screen name="medium-sp" options={{ title: 'Medium'}}/>
                <Stack.Screen name="full-sp" options={{ title: 'Full'}}/>
            </Stack> 
        </View>
    )
}
export default RootLayout
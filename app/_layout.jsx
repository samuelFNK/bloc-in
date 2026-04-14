import { View } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: '#ddd'},
            headerTintColor: '#333'
            }}>
            <Stack.Screen name="index" options={{ headerShown: false}}/>
            <Stack.Screen name="strech-index" options={{ title: 'Strech-index'}}/>
        </Stack>
    )
}
export default RootLayout
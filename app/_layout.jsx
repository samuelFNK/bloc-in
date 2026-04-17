import { Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { theme } from '../theme'

const RootLayout = () => {
    const router = useRouter();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Stack screenOptions={{
                animation: 'fade',
                animationDuration: 150,
                contentStyle: { backgroundColor: theme.colors.background },

                headerStyle: { backgroundColor: theme.colors.cardBackground},
                headerTitleStyle: { fontFamily: theme.font.family},
                headerTintColor: theme.colors.text,
                headerTitleAlign: 'center', 
                headerBackVisible: false,
                headerLeft: ({ canGoBack }) => canGoBack ? (
                    <TouchableOpacity 
                        onPress={() => router.back()}
                        style={{ marginLeft: 10 }}
                    >
                        <Ionicons 
                            name="chevron-back-sharp"
                            size={22} 
                            color={theme.colors.text} 
                        />
                    </TouchableOpacity>
                ) : null,
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
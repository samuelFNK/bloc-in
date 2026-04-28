import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../theme';

export const Header = ({ title, canGoBack }) => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ backgroundColor: theme.colors.cardBackground }}>
            <View style={styles.headerContainer}>
                <View style={styles.leftContainer}>
                    {canGoBack && (
                        <TouchableOpacity 
                            onPress={() => router.back()} 
                            style={styles.backButton}
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Ionicons name="chevron-back" size={26} color={theme.colors.text} />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText} numberOfLines={1}>
                        {title}
                    </Text>
                </View>

                <View style={styles.rightContainer} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: theme.spacing.medium,
        paddingVertical: theme.spacing.large,
    },
    leftContainer: {
        width: 40,
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
    },
    rightContainer: {
        width: 40,
    },
    titleText: {
        fontFamily: theme.font.family,
        color: theme.colors.text,
        fontSize: 18,
        fontWeight: '600',
    },
    backButton: {
        marginLeft: -5,
    }
});
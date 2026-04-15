import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    exerciseCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        margin: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    expandCard: {
        borderColor: '#a8a8a8',
        borderWidth: 1,
    },
    completedCard: {
        backgroundColor: '#eaffea',
        borderColor: '#4caf50',
        borderWidth: 1,
        elevation: 1,
    },
    completedText: {
        color: '#2e7d32',
        textDecorationLine: 'line-through',
    },
    exerciseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    exerciseInfo: {
        fontSize: 14,
        color: '#777',
        marginTop: 4,
    },
    activeTimerPreview: {
        color: '#333',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    expandedContent: {
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    imagePlaceholder: {
        width: '100%',
        height: 180,
        backgroundColor: '#e8e8e8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    fullDesc: {
        fontSize: 15,
        lineHeight: 22,
        color: '#444',
        marginBottom: 15,
    },
    timerTag: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    timerStartBtn: {
        backgroundColor: '#333',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completedTimerBtn: {
        backgroundColor: '#2e7d32',
    },
    prepMode: { backgroundColor: '#ff9800' },
    activeMode: { backgroundColor: '#4caf50' },
    timerBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
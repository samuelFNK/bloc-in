import { StyleSheet } from 'react-native';
import { theme } from '../../theme'

export const styles = StyleSheet.create({
    exerciseCard: {
        backgroundColor: theme.colors.cardBackground,
        padding: theme.spacing.large,
        borderRadius: theme.shape.softRadius,
        margin: theme.spacing.large,
        elevation: theme.shape.smallElevation,
        shadowColor: theme.shadowColor,
        shadowOffset: { width: theme.shape.shadowWidth, height: theme.shape.shadowHeight },
        shadowOpacity: theme.shape.shadowOpacity,
        shadowRadius: theme.shape.shadowRadius,
        borderWidth: theme.shape.borderWidth,
        borderColor: 'transparent',
    },
    expandCard: {
        borderColor: theme.colors.borderFocused,
    },
    completedCard: {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.success,
    },
    finishedProgramCard: {
        backgroundColor: theme.colors.victoryLight, 
        borderColor: theme.colors.victoryAccent,            
    },
    completedTitle: {
        fontFamily: theme.font.family,
        fontSize: theme.font.sizeLarge,
        color: theme.colors.successDark,
        textDecorationLine: 'line-through',
    },
    finishedProgramTitle: {
        fontSize: theme.font.sizeLarge,
        color: theme.colors.victoryDark,           
    },
    exerciseTitle: {
        fontFamily: theme.font.family,
        fontSize: theme.font.sizeLarge,
        color: theme.colors.text,
    },
    exerciseInfo: {
        fontFamily: theme.font.family,
        fontSize: theme.font.sizeMedium,
        color: theme.colors.textSecondary,
        marginTop: theme.spacing.tiny,
    },
    activeTimerPreview: {
        fontFamily: theme.font.family,
        color: theme.colors.text,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.tiny,
    },
    expandedContent: {
        marginTop: theme.spacing.medium,
        paddingTop: theme.spacing.medium,
        borderTopWidth: theme.shape.borderWidth,
        borderTopColor: theme.colors.border,
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
        fontFamily: theme.font.family,
        fontSize: theme.font.sizeMedium,
        lineHeight: theme.font.lineHeight,
        color: theme.colors.text,
        marginBottom: theme.spacing.medium,
    },
    timerTag: {
        fontFamily: theme.font.family,
        fontSize: theme.font.sizeMedium,
        color: theme.colors.text,
        marginBottom: theme.spacing.small,
    },
    timerStartBtn: {
        backgroundColor: theme.colors.successDark,
        paddingVertical: theme.spacing.small,
        borderRadius: theme.shape.stiffRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completedTimerBtn: {
        backgroundColor: theme.colors.successDark,
    },
    prepMode: { backgroundColor: theme.colors.surface },
    activeMode: { backgroundColor: theme.colors.primary },
    timerBtnText: {
        fontFamily: theme.font.family,
        color: theme.colors.white,
        fontSize: theme.font.sizeMedium,
    },
});
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import { styles } from './styles';

const ExerciseCard = ({ item, isCompleted, onComplete }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isPrep, setIsPrep] = useState(false);
    const [isTiming, setIsTiming] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isTiming && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (isTiming && timeLeft === 0) {
            if (isPrep) {
                setIsPrep(false);
                setTimeLeft(item.durationSec);
            } else {
                setIsTiming(false);
                onComplete(item.id);
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            }
        }
        return () => clearInterval(interval);
    }, [isTiming, timeLeft, isPrep]);

    const toggleExpanded = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    };

    const startTimer = () => {
        setTimeLeft(3);
        setIsPrep(true);
        setIsTiming(true);
    };

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={toggleExpanded}
            style={[styles.exerciseCard, isExpanded && styles.expandCard, isCompleted && styles.completedCard]}
        >
            <View style={styles.headerRow}>
                <Text style={[styles.exerciseTitle, isCompleted && styles.completedText]}>
                    {item.title} {isCompleted && '✓'}
                </Text>
            </View>
            
            {!isExpanded && (
                <Text numberOfLines={1} style={[styles.exerciseInfo, isTiming && styles.activeTimerPreview]}>
                    {isTiming ? (`${isPrep ? 'Ready' : 'Go'}: ${timeLeft}s`) : isCompleted ? ('Done! ✓') : (item.desc)}
                </Text>
            )}

            {isExpanded && (
                <View style={styles.expandedContent}>
                    <View style={styles.imagePlaceholder}>
                        <Text style={{color: '#999'}}>Image placeholder</Text>
                    </View>
                    <Text style={styles.fullDesc}>{item.desc}</Text>

                    {isTiming ? (
                        <View style={[styles.timerStartBtn, isPrep ? styles.prepMode : styles.activeMode]}>
                            <Text style={styles.timerBtnText}>
                                {isPrep ? `READY: ${timeLeft}` : `GO: ${timeLeft}s`}
                            </Text>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.timerTag}>{item.durationSec} Sec</Text>
                            <TouchableOpacity 
                                style={[styles.timerStartBtn, isCompleted && styles.completedTimerBtn]} 
                                onPress={startTimer}
                            >
                                <Text style={styles.timerBtnText}>{isCompleted ? 'Restart Timer' : 'Start Timer'}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
};

export default ExerciseCard;
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { styles } from './styles';

const ExerciseCard = ({ item, isCompleted, onComplete, isProgramFinished }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const [timeLeft, setTimeLeft] = useState(0);
    const [isPrep, setIsPrep] = useState(false);
    const [isTiming, setIsTiming] = useState(false);

    const [side, setSide] = useState("A");
    const [isAlternating, setIsAlternating] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isTiming && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } 
        else if (isTiming && timeLeft === 0) {
            //start exercise
            if (isPrep) {
                setIsPrep(false);
                
                if (item.alternating){
                    setTimeLeft(item.durationSec / 2);
                } else {
                    setTimeLeft(item.durationSec);
                }

            }
            //alternate
            else if (item.alternating && side === "A" && !isAlternating){
                setIsAlternating(true);
                setTimeLeft(3);
            }
            //start side B of alternating exercise 
            else if (item.alternating && side === "A" && isAlternating){
                setIsAlternating(false);
                setSide("B");
                setTimeLeft(item.durationSec / 2);
            }
            //end exercise
            else {
                setIsTiming(false);
                setSide("A");
                setIsAlternating(false);
                onComplete(item.id);
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            }
        }
        return () => clearInterval(interval);
    }, [isTiming, timeLeft, isPrep, isAlternating, side]);

    const toggleExpanded = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    };

    const startTimer = () => {
        setSide("A");
        setIsAlternating(false);
        setTimeLeft(3);
        setIsPrep(true);
        setIsTiming(true);
    };

    const renderTimerText = () => {
        if (!isTiming && isCompleted) return "Done!";   
        if (isPrep) return `READY: ${timeLeft}`;
        if (isAlternating) return `SWITCH SIDES: ${timeLeft}`;
        if (item.alternating) return `GO (side ${side}): ${timeLeft}s`;
        return `GO: ${timeLeft}s`
    }

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={toggleExpanded}
            style={[styles.exerciseCard, isExpanded && styles.expandCard, isCompleted && styles.completedCard, isProgramFinished && styles.finishedProgramCard]}
        >
            <View style={styles.headerRow}>
                <Text style={[styles.exerciseTitle, isCompleted && styles.completedTitle, isProgramFinished && styles.finishedProgramTitle]}>
                    {item.title}{isCompleted}
                </Text>
            </View>
            
            {!isExpanded && (
                <Text numberOfLines={1} style={[styles.exerciseInfo, isTiming && styles.activeTimerPreview]}>
                    {isTiming ? renderTimerText() : isCompleted ? ('Done!') : (item.desc)}
                </Text>
            )}

            {isExpanded && (
                <View style={styles.expandedContent}>
                    {item.img ? (
                        <Image source={item.img} style={styles.img} resizeMode='cover'/>
                    ) : (
                        <View style={styles.imgPlaceholder}>
                            <Text style={{color: '#999'}}>No Image Available</Text>
                        </View>
                    )}

                    <Text style={styles.fullDesc}>{item.desc}</Text>

                    {isTiming ? (
                        <View style={[styles.timerStartBtn, isPrep ? styles.prepMode : styles.activeMode]}>
                            <Text style={styles.timerBtnText}>
                                {renderTimerText()}
                            </Text>
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.timerTag}>
                                {item.alternating ? `${item.durationSec / 2} Sec x 2 (Alternating)` : `${item.durationSec} Sec`}
                            </Text>
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
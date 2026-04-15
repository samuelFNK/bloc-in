import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, LayoutAnimation} from 'react-native';
import { stretchExecises } from '../constants/stretch-exercises';

const LightSP = () => {

    const [program, setProgram] = useState([]);
    const [expandedId, setExpandedId] = useState(null);
    const [activeId, setActiveId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isPrep, setIsPrep] = useState(false);
    const [completedIds, setCompletedIds] = useState([]);

    //fetch exercises
    useEffect(() => {
        const execises = [...stretchExecises].sort(() => 0.5 - Math.random()).slice(0, 3);
        setProgram(execises);
    }, []);

    //timer
    useEffect(() => {
        let interval = null;

        if(activeId !== null && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (activeId !== null && timeLeft === 0) {
            if(isPrep) {
                const currentStretch = program.find(s => s.id === activeId);
                setIsPrep(false);
                setTimeLeft(currentStretch.durationSec);
            } else {
                setCompletedIds(prev => [...prev, activeId]);
                setActiveId(null);
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            }
        }

        return () => clearInterval(interval);
    }, [activeId, timeLeft, isPrep]);


    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const startTimer = (item) => {
        setActiveId(item.id);
        setIsPrep(true);
        setTimeLeft(3);
    };

    return ( 
        <View style={styles.container}>
           <FlatList
                data={program}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const isExpanded = expandedId === item.id;
                    const isTiming = activeId === item.id;  
                    const isCompleted = completedIds.includes(item.id);

                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => toggleExpanded(item.id)}
                            style={[styles.exerciseCard, isExpanded && styles.expandCard, isCompleted && styles.completedCard]}
                        >
                            <View style={styles.headerRow}>
                                <Text style={[styles.exerciseTitle, isCompleted && styles.completedText]}>
                                    {item.title} {isCompleted && '✓'}
                                </Text>
                            </View>
                            
                            {/*content preview*/}
                            {!isExpanded && (
                                <Text numberOfLines={1} style={[styles.exerciseInfo, isTiming && styles.activeTimerPreview]}>
                                    {isTiming ? (`${isPrep ? 'READY' : 'GO'}: ${timeLeft}s`) : isCompleted ? ('Done! ✓') : (item.desc)}
                                </Text>
                            )}

                            {/*expanded content*/}
                            {isExpanded && (
                                <View style={styles.expandedContent}>
                                    {/* Placeholder for Image */}
                                    <View style={styles.imagePlaceholder}>
                                        <Text style={{color: '#999'}}>Image placeholder for {item.title}</Text>
                                    </View>

                                    <Text style={styles.fullDesc}>{item.desc}</Text>

                                    {isTiming ? (
                                        <View style={[styles.timerStartBtn, isPrep ? styles.prepMode : styles.activeMode]}>
                                            <Text style={styles.tmerBtnText}>
                                                {isPrep ? `READY: ${timeLeft}` : `GO: ${timeLeft}s`}
                                            </Text>
                                        </View>
                                    ) : (
                                        <View>
                                            <Text style={styles.timerTag}>{item.durationSec} Sec</Text>
                                            <TouchableOpacity 
                                                style={[styles.timerStartBtn, isCompleted && styles.completedTimerBtn]} 
                                                onPress={() => startTimer(item)}
                                            >
                                                <Text style={styles.tmerBtnText}>{isCompleted ? 'Restart Timer' : 'Start Timer'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </View>
                            )}


                        </TouchableOpacity>
                    )
                }}
           />            
        </View>
    );
};

export default LightSP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    exerciseCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    expandCard: {
        borderColor: '#ffe600',
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
    activeTimerPreview: {
    color: '#333',
    fontWeight: 'bold',
},
    prepMode: { backgroundColor: '#ff9800' },
    activeMode: { backgroundColor: '#4caf50' },
    tmerBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    completedTimerBtn: {
        backgroundColor: '#2e7d32',
    },
    headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    },
});
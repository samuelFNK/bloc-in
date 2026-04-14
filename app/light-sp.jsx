import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { stretchExecises } from '../constants/stretch-exercises';

const LightSP = () => {

    const [program, setProgram] = useState([]);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const execises = [...stretchExecises].sort(() => 0.5 - Math.random()).slice(0, 3);
        setProgram(execises);
    }, []);

    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null : id); //if already selected, set null
    };

    return ( 
        <View style={styles.container}>
           <FlatList
                data={program}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    const isExpanded = expandedId === item.id;

                    return (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => toggleExpanded(item.id)}
                            style={[styles.exerciseCard, isExpanded && styles.expandCard]}
                        >
                            <Text style={styles.exerciseTitle}>{item.title}</Text>

                            {/*content preview*/}
                            {!isExpanded && (
                                <Text numberOfLines={1} style={styles.exerciseInfo}>{item.desc}</Text>
                            )}

                            {/*expanded content*/}
                            {isExpanded && (
                                <View style={styles.expandedContent}>
                                    {/* Placeholder for Image */}
                                    <View style={styles.imagePlaceholder}>
                                        <Text style={{color: '#999'}}>Image placeholder for {item.title}</Text>
                                    </View>

                                    <Text style={styles.fullDesc}>{item.desc}</Text>
                                    <Text style={styles.timerTag}>{item.durationSec} Sec</Text>
                                    <TouchableOpacity style={styles.timerStartBtn}>
                                        <Text style={styles.tmerBtnText}>Start Timer</Text>
                                    </TouchableOpacity>
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
        backgroundColor: '#f5f5f5', // Light gray background
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    exerciseCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        // Shadow for Android
        elevation: 3,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    expandCard: {
        borderColor: '#ffe600', // Highlight border when open
        borderWidth: 1,
        elevation: 5,
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
        backgroundColor: '#333', // Dark slate button
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tmerBtnText: { // Matching your JSX typo "tmerBtnText"
        color: '#ffe600', // Yellow text on dark button
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});
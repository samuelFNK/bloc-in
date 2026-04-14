import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { stretchExecises } from '../constants/stretch-exercises';

const LightSP = () => {

    const [program, setProgram] = useState([]);

    useEffect(() => {
        const execises = [...stretchExecises].sort(() => 0.5 - Math.random()).slice(0, 3);
        setProgram(execises);
    }, []);

    return ( 
        <View style={styles.container}>
           <FlatList
                data={program}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.exerciseCard}>
                        <Text style={styles.exerciseTitle}>{item.title}</Text>
                        <Text style={styles.exerciseInfo}>{item.desc}</Text>
                        <Text style={styles.exerciseInfo}>{item.durationSec}</Text>
                    </View>
                )}
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    exerciseCard: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        // Adding a little shadow to make it look "Pro"
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
    },
    exerciseTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    exerciseInfo: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
});
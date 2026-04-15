import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { stretchExecises } from '../constants/stretch-exercises';
import ExerciseCard from '../components/ExerciseCard';

const LightSP = () => {
    const [program, setProgram] = useState([]);
    const [completedIds, setCompletedIds] = useState([]);

    useEffect(() => {
        const exercises = [...stretchExecises].sort(() => 0.5 - Math.random()).slice(0, 3);
        setProgram(exercises);
    }, []);

    const handleComplete = (id) => {
        if (!completedIds.includes(id)) {
            setCompletedIds(prev => [...prev, id]);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={program}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ExerciseCard 
                        item={item} 
                        isCompleted={completedIds.includes(item.id)}
                        onComplete={handleComplete}
                    />
                )}
            />
        </View>
    );
};

export default LightSP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
});
import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
import { stretchExecises } from '../../constants/stretch-exercises';
import ExerciseCard from '../../components/ExerciseCard';
import { theme } from '../../theme'


const StretchProgram = ({ exerciseCount }) => {
    const navigation = useNavigation();
    const [program, setProgram] = useState([]);
    const [completedIds, setCompletedIds] = useState([]);

    const isProgramFinished = program.length > 0 && program.length === completedIds.length; 
    const hasStarted = completedIds.length > 0;

    const handleComplete = (id) => {
        if (!completedIds.includes(id)) {
            setCompletedIds(prev => [...prev, id]);
        }
    };
    
    useEffect(() => {
        const exercises = [...stretchExecises].sort(() => 0.5 - Math.random()).slice(0, exerciseCount);
        setProgram(exercises);
    }, [exerciseCount]);

    //warning if abandoning progress
    useEffect(() => {
        const abandonProgram = navigation.addListener('beforeRemove', (e) => {
            if(!hasStarted || isProgramFinished) {
                return;
            }

            e.preventDefault();

            Alert.alert(
                'Abandon Progress? 🚦',
                'Current prograss will be discarded.',
                [
                    {text: "Stay 🟢", style: 'cancel', onPress: () => {}},
                    {text: "Leave 🔴", style: 'destructive', onPress: () => navigation.dispatch(e.data.action)},
                ]
            );
        });
        return abandonProgram;
    }, [navigation, hasStarted, isProgramFinished]);

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
                        isProgramFinished={isProgramFinished}
                    />
                )}
            />
        </View>
    );
};

export default StretchProgram;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        paddingTop: theme.spacing.huge,
        paddingHorizontal: theme.spacing.large,
    },
});
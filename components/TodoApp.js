import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, markTaskComplete } from './Actions';
import TaskList from './TaskList';

const Todoapp = () => {
    const [taskText, setTaskText] = useState('');
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const handleAddTask = () => {
        if (taskText.trim() !== '') {
            dispatch(addTask(taskText));
            setTaskText('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={taskText}
                onChangeText={text => setTaskText(text)}
                placeholder="Enter Task"
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    handleAddTask()
                }}
            >
                <Text style={styles.buttonText}>Add Task</Text>
            </TouchableOpacity>
            <TaskList
                tasks={tasks}
                onDelete={(taskId, completed) => dispatch(removeTask(taskId, completed))}
                onToggleComplete={(taskId) => dispatch(markTaskComplete(taskId))}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Todoapp;

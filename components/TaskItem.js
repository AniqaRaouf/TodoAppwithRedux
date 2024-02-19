import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  const handleToggleComplete = () => {
    if (!task.completed) {
      onToggleComplete(task.id);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleComplete}>
        <Text style={styles.taskText}>
          {task.completed ? '✅ ' : '❌ '} {/* Display tick or cross sign based on completion */}
          {task.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(task.id,task.completed)} disabled={!task.completed}>
        <Text style={[styles.deleteButton, { opacity: task.completed ? 1 : 0.5 }]}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  taskText: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
  },
});

export default TaskItem;

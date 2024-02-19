import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
    return (
    <View style={styles.container}>
        {tasks.tasks?.length>0?
        <View>
        <Text>** Click the task to mark it complete **</Text>
        <Text>** Delete is disabled untill the task is complete **</Text>
        </View>
        :null
        }
      <FlatList
        data={tasks.tasks}
        renderItem={({ item }) => (
            <TaskItem task={item} onDelete={onDelete} onToggleComplete={onToggleComplete} />
            )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  list: {
    paddingHorizontal: 16,
  },
});

export default TaskList;

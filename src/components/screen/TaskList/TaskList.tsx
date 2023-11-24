// TaskList.tsx
import React from 'react';
import { ScrollView } from 'react-native';
import TaskItem from './TaskItem';

interface TaskListProps {
  savedTasks: string[];
  onEditTask: (index: number) => void;
  onDeleteTask: (index: number) => void;
}
  
const TaskList: React.FC<TaskListProps> = ({ savedTasks, onEditTask, onDeleteTask }) => {
  return (
    <ScrollView>
      {savedTasks.map((savedTask, index) => (
        <TaskItem
          key={index}
          task={savedTask}
          onEdit={() => onEditTask(index)}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </ScrollView>
  );
};

export default TaskList;

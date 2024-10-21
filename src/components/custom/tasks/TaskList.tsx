// components/move/TaskList.tsx

import styled from '@emotion/styled';

import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: any[]; // Define the task type more specifically if needed
  onDeleteTask: (taskId: string) => Promise<void>;
  onUpdateTask: (updatedTask: any) => Promise<void>;
  onToggleCompletion: (taskId: string) => void;
}

// Styled component for TaskList container
const TaskListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskList = ({
  tasks,
  onDeleteTask,
  onUpdateTask,
  onToggleCompletion,
}: TaskListProps) => {
  return (
    <TaskListContainer>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onSaveEdit={onUpdateTask}
            onToggleCompletion={() => onToggleCompletion(task.id)}
          />
        ))
      ) : (
        <p>No tasks found for the selected filter.</p>
      )}
    </TaskListContainer>
  );
};

export default TaskList;

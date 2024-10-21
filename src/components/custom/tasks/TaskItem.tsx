/* eslint-disable import/no-extraneous-dependencies */
// components/move/TaskItem.tsx

import styled from '@emotion/styled';
import { useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';

// Smoothly animate the checkmark icon appearance/disappearance
const CheckIcon = styled.span<{ completed: boolean }>`
  margin-right: ${(props) => (props.completed ? '8px' : '0')};
  color: white;
  width: ${(props) => (props.completed ? '20px' : '0')};
  height: 20px;
  background: ${(props) => (props.completed ? 'green' : 'transparent')};
  border-radius: 50%;
  display: ${(props) => (props.completed ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
`;

interface TaskItemProps {
  task: any;
  onDelete: () => void;
  onSaveEdit: (updatedTask: any) => void;
  onToggleCompletion: () => void;
}

// Styled Components
const TaskItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const TaskDetails = styled.div<{ completed: boolean }>`
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

const CompleteButton = styled.button<{ completed: boolean }>`
  background-color: ${(props) => (props.completed ? '#6c757d' : '#28a745')};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;

const EditButton = styled.button`
  background-color: #ffc107;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;

const SaveButton = styled.button`
  background-color: #28a745;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TaskTitle = styled.h1<{ completed: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.completed ? 'green' : 'inherit')};
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

const TaskItem = ({
  task,
  onDelete,
  onSaveEdit,
  onToggleCompletion,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(
    task.description || '',
  );

  const handleSave = () => {
    onSaveEdit({ ...task, title: editTitle, description: editDescription });
    setIsEditing(false);
  };

  return (
    <TaskItemContainer>
      {isEditing ? (
        <>
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Edit task title"
          />
          <Input
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Edit task description"
          />
          <ButtonContainer>
            <SaveButton onClick={handleSave}>Save</SaveButton>
            <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
          </ButtonContainer>
        </>
      ) : (
        <>
          <>
            <TaskTitle completed={task.completed}>
              {task.completed && (
                <CheckIcon completed>
                  <IoCheckmarkOutline color="#ffffff" size="15px" />
                </CheckIcon>
              )}
              {task.title}
            </TaskTitle>
            <TaskDetails completed={task.completed}>
              <p>{task.description}</p>
              <p>Priority: {task.priority}</p>
              <p>Created By: {task.author}</p>
            </TaskDetails>
          </>
          <ButtonContainer>
            <CompleteButton
              completed={task.completed}
              onClick={onToggleCompletion}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </CompleteButton>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
          </ButtonContainer>
        </>
      )}
    </TaskItemContainer>
  );
};

export default TaskItem;

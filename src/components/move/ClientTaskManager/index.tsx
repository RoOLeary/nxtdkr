'use client';

// @ts-ignore
import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';

import OverlayComponent from '../Overlay';
import TaskForm from '../TaskForm';
import TaskList from '../TaskList';

// Styled components for filters and reset buttons
const Select = styled.select`
  margin-left: 10px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: black;

  @media (max-width: 600px) {
    margin-left: 0;
  }

  &:focus {
    outline: 1px solid green;
    border-color: green;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterLabel = styled.label`
  font-size: 16px;
  margin-right: 10px;
  font-weight: bold;
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ResetButton = styled.button`
  background-color: red;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  @media (max-width: 600px) {
    flex-grow: 1;
  }

  &:hover {
    background-color: darkred;
  }
`;

const NoTasksMessage = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 18px;
  color: #555;
`;

const InstructionsContainer = styled.div`
  background: white;
  padding: 12px;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;

  p {
    color: lightslategrey;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const InstructionsText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: normal;
  display: flex;
  align-items: center;
  color: gray;
`;

export default function ClientTaskManager({ initialTasks }: any) {
  const [tasks, setTasks] = useState(initialTasks);
  const [userName, setUserName] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  // Check if userName exists in localStorage
  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  // Handle name submission from overlay
  const handleNameSubmit = (name: string) => {
    localStorage.setItem('userName', name);
    setUserName(name);
  };

  // Add Task
  const handleAddTask = useCallback(async (newTask: any) => {
    try {
      const response = await fetch(
        `https://67005c054da5bd237553e174.mockapi.io/api/move-ro-move/tasks`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        },
      );
      const addedTask = await response.json();
      setTasks((prevTasks: any) => [addedTask, ...prevTasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }, []);

  // Delete Task
  const handleDeleteTask = useCallback(async (taskId: string) => {
    try {
      await fetch(
        `https://67005c054da5bd237553e174.mockapi.io/api/move-ro-move/tasks/${taskId}`,
        { method: 'DELETE' },
      );
      setTasks((prevTasks: any) =>
        prevTasks.filter((task: any) => task.id !== taskId),
      );
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }, []);

  // Update Task (Edit & Complete)
  const handleUpdateTask = useCallback(async (updatedTask: any) => {
    try {
      const response = await fetch(
        `https://67005c054da5bd237553e174.mockapi.io/api/move-ro-move/tasks/${updatedTask.id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedTask),
        },
      );
      const data = await response.json();
      setTasks((prevTasks: any) =>
        prevTasks.map((task: any) => (task.id === data.id ? data : task)),
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  }, []);

  // Toggle Task Completion
  const handleToggleCompletion = useCallback(
    async (taskId: string) => {
      const task = tasks.find((t: any) => t.id === taskId);
      if (task) {
        await handleUpdateTask({ ...task, completed: !task.completed });
      }
    },
    [tasks, handleUpdateTask],
  );

  // Filter Tasks
  const filteredTasks = tasks.filter((task: any) => {
    if (filter === 'my-tasks') return task.author === userName;
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  // Reset Filters
  const resetFilters = () => {
    setFilter('all');
    window.location.reload();
  };
  // Purge Everything (clear localStorage for logout)
  const purgeEverything = () => {
    if (window.confirm('Are you sure you want to clear storage and logout?')) {
      localStorage.clear();
      window.location.reload(); // Clear storage and reload to simulate logout
    }
  };

  if (!userName) {
    // Show the overlay until the user enters their name
    return <OverlayComponent onSubmitName={handleNameSubmit} />;
  }

  return (
    <div className="min-w-max md:min-w-[760px]">
      <h1 className="min-w-max md:min-w-[760px] text-3xl h-full font-black text-left">
        Simple Task Manager (NextJS version - App Router)
      </h1>
      <InstructionsContainer>
        <InstructionsText>
          Hi, {userName}. Use the interface below to Add, Edit, Update and Delete Tasks. <br />
          When adding a task, you will automatically be shown as the task
          creator. <br />
          Tasks can be filtered by All, My Tasks, Completed, and Incomplete.
        </InstructionsText>
      </InstructionsContainer>
      {/* Pass initial tasks to ClientTaskManager */}
      {/* TaskForm and TaskList components */}
      <TaskForm user={userName} onAddTask={handleAddTask} />

      {/* Filter and Reset buttons */}
      <FilterContainer>
        <FilterLabel htmlFor="filter-tasks">Filter by:</FilterLabel>
        <Select
          id="filter-tasks"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="my-tasks">My Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="incomplete">Incomplete Tasks</option>
        </Select>
        <ResetButton onClick={resetFilters}>Reset</ResetButton>
        <ResetButton onClick={purgeEverything}>Logout</ResetButton>
      </FilterContainer>

      {/* Task List */}
      {filteredTasks.length > 0 ? (
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={handleDeleteTask}
          onUpdateTask={handleUpdateTask}
          onToggleCompletion={handleToggleCompletion}
        />
      ) : (
        <NoTasksMessage>No tasks found for the selected filter.</NoTasksMessage>
      )}
    </div>
  );
}

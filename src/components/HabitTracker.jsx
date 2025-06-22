// src/components/HabitTracker.jsx
import React, { useState } from 'react';

const initialHabits = [
  { id: 1, title: 'Drink Water', completed: false },
  { id: 2, title: 'Meditate', completed: false },
  { id: 3, title: 'Code for 1 hour', completed: false },
  { id: 4, title: 'Read a Book', completed: false },
  { id: 5, title: 'Exercise', completed: false },
];

const HabitTracker = () => {
  const [habits, setHabits] = useState(initialHabits);
  const [filter, setFilter] = useState('ALL');

  const handleToggle = (id) => {
    const updated = habits.map((habit) =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updated);
  };

  const filteredHabits =
    filter === 'COMPLETED' ? habits.filter((h) => h.completed) : habits;

  const completedCount = habits.filter((h) => h.completed).length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Mini Habit Tracker</h1>

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setFilter('ALL')}
          className={`px-4 py-2 rounded ${
            filter === 'ALL' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Show All
        </button>
        <button
          onClick={() => setFilter('COMPLETED')}
          className={`px-4 py-2 rounded ${
            filter === 'COMPLETED' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          Show Completed
        </button>
      </div>

      <ul className="space-y-2">
        {filteredHabits.map((habit) => (
          <li
            key={habit.id}
            className="flex justify-between items-center p-3 bg-gray-100 rounded"
          >
            <span
              className={`${
                habit.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {habit.title}
            </span>
            <input
              type="checkbox"
              checked={habit.completed}
              onChange={() => handleToggle(habit.id)}
              className="w-5 h-5"
            />
          </li>
        ))}
      </ul>

      <div className="mt-4 text-center text-sm text-gray-600">
        ✅ {completedCount}/{habits.length} habits completed today
      </div>
    </div>
  );
};

export default HabitTracker;

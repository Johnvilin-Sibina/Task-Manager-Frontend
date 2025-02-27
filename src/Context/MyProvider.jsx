import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Update localStorage whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser"); // Remove if user logs out
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [currentUser, tasks]);

  return (
    <MyContext.Provider
      value={{ currentUser, setCurrentUser, tasks, setTasks }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

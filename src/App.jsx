import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import { ThemeProvider, createTheme } from "@mui/material";
import Users from "./pages/Users";
import Tasks from "./pages/Tasks";
import UsersUpdate from "./pages/UsersUpdate";
import UsersCreate from "./pages/UsersCreate";
import UsersResetPassword from "./pages/UsersResetPassword";
import TasksCreate from "./pages/TasksCreate";
import TasksUpdate from "./pages/TasksUpdate";
import TasksNota from "./pages/TasksNota";


const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Mulish',
      'sans-serif',
    ].join(','),
  },
});
function App() {
  return (
  <ThemeProvider theme={customTheme}>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/users" element={<Users />}></Route>
    <Route path="/users/update/:id" element={<UsersUpdate />}></Route>
    <Route path="/users/reset-password/:id" element={<UsersResetPassword />}></Route>
    <Route path="/users/create" element={<UsersCreate />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/tasks" element={<Tasks />}></Route>
    <Route path="/tasks/create" element={<TasksCreate />}></Route>
    <Route path="/tasks/update/:id" element={<TasksUpdate />}></Route>
    <Route path="/tasks/nota/:id" element={<TasksNota />}></Route>
  </Routes>
  </ThemeProvider>);
}

export default App;

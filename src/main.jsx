import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root/Root";
import Home from "./Pages/Home/Home";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./layout/Dashboard/Dashboard";
import Register from "./Pages/Register/Register";
import AddTask from "./Components/AddTask/AddTask";

// Routes are here

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/task-dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ],
  },
  {
   path: '/task-dashboard' ,
   element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
   children: [
    // {
    //   path: '/task-dashboard',
    //   element: <PrivateRoute><TaskBoard></TaskBoard></PrivateRoute> 
    // },
    {
      path: '/task-dashboard/add-task',
      element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
    }
   ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);

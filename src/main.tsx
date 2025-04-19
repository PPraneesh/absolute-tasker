import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { store } from "../src/lib/redux/store.ts";
import { Provider } from "react-redux";
import { Login } from "./pages/Login.tsx";
import { Browse } from "./pages/Browse.tsx";
import TaskPage from "./pages/TaskPage.tsx";
import { PostTask } from "./pages/PostTask.tsx";
import Profile from "./pages/Profile.tsx";
import MyTasks from "./pages/MyTasks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "post",
        element: <PostTask />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "/task/:id",
        element: <TaskPage />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "my-tasks",
        element: <MyTasks />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

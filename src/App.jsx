import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import { routes } from "./constants";

export default function App() {
  return <ChallengesRouter></ChallengesRouter>;
}

export function ChallengesRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Homepage />} />
        {routes.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

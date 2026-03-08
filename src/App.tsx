import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { HomePage } from "./pages/HomePage";
import { ActivityPage } from "./pages/ActivityPage";
import { PageLayout } from "./components/PageLayout";
import { PageTransition } from "./components/PageTransition";
import { NavigationProgress } from "./components/NavigationProgress";
import { PersonalProject } from "./pages/PersonalProjects/PersonalProject";
import { PersonalProjectsPage } from "./pages/PersonalProjects/PersonalProjectsPage";
import { ProfessionalWorkPage } from "./pages/ProfessionalWork/ProfessionalWorkPage";
import { ProfessionalWorkProject } from "./pages/ProfessionalWork/ProfessionalWorkProject";

function AnimatedRoutes() {
  const location = useLocation();

  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/professional-work", element: <ProfessionalWorkPage /> },
    {
      path: "/professional-work/:projectId",
      element: <ProfessionalWorkProject />,
    },
    { path: "/personal-projects", element: <PersonalProjectsPage /> },
    { path: "/personal-projects/:projectId", element: <PersonalProject /> },
    { path: "/activity", element: <ActivityPage /> },
  ];

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PageTransition>{element}</PageTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationProgress />
      <PageLayout>
        <AnimatedRoutes />
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;

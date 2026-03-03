import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { ActivityPage } from "./pages/ActivityPage";
import { PageLayout } from "./components/PageLayout";
import { PersonalProject } from "./pages/PersonalProjects/PersonalProject";
import { PersonalProjectsPage } from "./pages/PersonalProjects/PersonalProjectsPage";
import { ProfessionalWorkPage } from "./pages/ProfessionalWork/ProfessionalWorkPage";
import { ProfessionalWorkProject } from "./pages/ProfessionalWork/ProfessionalWorkProject";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professional-work" element={<ProfessionalWorkPage />} />
          <Route
            path="/professional-work/:projectId"
            element={<ProfessionalWorkProject />}
          />
          <Route path="/personal-projects" element={<PersonalProjectsPage />} />
          <Route
            path="/personal-projects/:projectId"
            element={<PersonalProject />}
          />
          <Route path="/activity" element={<ActivityPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;

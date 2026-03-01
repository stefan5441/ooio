import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Activity } from "./pages/Activity";
import { PageLayout } from "./components/PageLayout";
import { PersonalProjects } from "./pages/PersonalProjects/PersonalProjects";
import { ProfessionalWork } from "./pages/ProfessionalWork/ProfessionalWork";
import { ProfessionalWorkProject } from "./pages/ProfessionalWork/ProfessionalWorkProject";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professional-work" element={<ProfessionalWork />} />
          <Route path="/professional-work/:projectId" element={<ProfessionalWorkProject />} />
          <Route path="/personal-projects" element={<PersonalProjects />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;

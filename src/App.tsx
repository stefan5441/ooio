import { useState } from "react";

import { Tab } from "./types";
import { Home } from "./pages/Home";
import { Activity } from "./pages/Activity";
import { PageLayout } from "./components/PageLayout";
import { PersonalProjects } from "./pages/PersonalProjects";
import { ProfessionalWork } from "./pages/ProfessionalWork";

function App() {
  const [tab, setTab] = useState<Tab>(Tab.Home);

  return (
    <PageLayout setTab={setTab} activeTab={tab}>
      {tab === Tab.Home && <Home />}
      {tab === Tab.ProfessionalWork && <ProfessionalWork />}
      {tab === Tab.PersonalProjects && <PersonalProjects />}
      {tab === Tab.Activity && <Activity />}
    </PageLayout>
  );
}

export default App;

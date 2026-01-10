import { useState } from "react";

import type { Tab } from "./types";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Recently } from "./pages/Recently";
import { PageLayout } from "./components/PageLayout";

function App() {
  const [tab, setTab] = useState<Tab>("Home");

  return (
    <PageLayout setTab={setTab} activeTab={tab}>
      {tab === "Home" && <Home />}
      {tab === "Projects" && <Projects />}
      {tab === "Recently" && <Recently />}
    </PageLayout>
  );
}

export default App;

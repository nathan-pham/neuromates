import Root from "./components/root/root";
import { Section, Subsection } from "./components/section/section";
import Disclaimer from "./components/disclaimer/disclaimer";
import Scene from "./components/section/matter/scene";
import Stages from "./components/pages/stages";
import Health from "./components/pages/health";
import Games from "./components/pages/games";
import Tips from "./components/pages/tips";

import "./App.css";

function App() {
  return (
    <Root>
      <Section title="Neuromates" subtitle="helping you retain your memory" hash="overview" />
      <Scene />
      <Section title="Stages" subtitle="simplifying the disease process" hash="stages" />
      <Subsection>
        <Stages />
      </Subsection>
      <Section title="Health" subtitle="diet and exercise" hash="health" />
      <Subsection>
        <Health />
      </Subsection>
      <Section title="Games" subtitle="engage the mind" hash="games" />
      <Subsection>
        <Games />
      </Subsection>
      <Section title="Tips" subtitle="further recommendations" hash="tips" />
      <Subsection>
        <Tips />
      </Subsection>
      <Disclaimer />
    </Root>
  );
}

export default App;

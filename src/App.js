import Root from "./components/root/root";
import {Section, Subsection} from "./components/section/section";
import Scene from "./components/section/matter/scene";

import "./App.css";

function App() {
  return (
    <Root>
      <Section
        title="Neuromates"
        subtitle="helping you retain your memory"
        hash="overview"
      />
      <Scene />
      <Section
        title="Stages"
        subtitle="simplifying the disease process"
        hash="stages"
      />
      <Subsection>
        <ol className="stages">
          <li>
            <h2>No Impairment</h2>
            <p>During this stage, Alzheimer’s is not detectable and no memory problems or other symptoms of dementia are evident.</p>
          </li>
          <li>
            <h2>Very Mild Decline</h2>
            <p>The senior may notice minor memory problems or lose things around the house, although not to the point where the memory loss can easily be distinguished from normal age-related memory loss. The person will still do well on memory tests and the disease is unlikely to be detected by loved ones or physicians.</p>
          </li>
          <li>
            <h2>Mild Decline</h2>
            <p>At this stage, the family members and friends of the senior may begin to notice cognitive problems. Performance on memory tests are affected and physicians will be able to detect impaired cognitive function. People in stage 3 will have difficulty in many areas including:</p>
            <ul>
              <li>Finding the right word during conversations</li>
              <li>Organizing and planning</li>
              <li>Remembering names of new acquaintances</li>
            </ul>
            <p>People with stage three Alzheimer’s may also frequently lose personal possessions, including valuables.</p>
          </li>
          <li>
            <h2>Moderate Decline</h2>
            <p>In stage four of Alzheimer’s, clear-cut symptoms of the disease are apparent. People with stage four of Alzheimer’s:</p>
            <ul>
              <li>Have difficulty with simple arithmetic</li>
              <li>Have poor short-term memory (may not recall what they ate for breakfast, for example)</li>
              <li>Inability to manage finance and pay bills</li>
              <li>May forget details about their life histories</li>
            </ul>
          </li>
          <li>
            <h2>Moderately Severe Decline</h2>
            <p>During the fifth stage of Alzheimer’s, people begin to need help with many day-to-day activities. People in stage five of the disease may experience:</p>
            <ul>
              <li>Difficulty dressing appropriately</li>
              <li>Inability to recall simple details about themselves such as their own phone number</li>
              <li>Significant confusion</li>
            </ul>
            <p>On the other hand, people in stage five maintain functionality. They typically can still bathe and toilet independently. They also usually still know their family members and some detail about their personal histories, especially their childhood and youth.</p>
          </li>
          <li>
            <h2>Severe Decline</h2>
            <p>People with the sixth stage of Alzheimer’s need constant supervision and frequently require professional care. Symptoms include:</p>
            <ul>
              <li>Confusion or unawareness of environment and surroundings</li>
              <li>Inability to recognize faces except for the closest friends and relatives</li>
              <li>Inability to remember most details of personal history</li>
              <li>Loss of bladder and bowel control</li>
              <li>Major personality changes and potential behavior problems</li>
              <li>The need for assistance with activities of daily living such as toileting and bathing</li>
              <li>Wandering</li>
            </ul>
          </li>
          <li>
            <h2>Very Severe Decline</h2>
            <p>Stage seven is the final stage of Alzheimer’s. Because the disease is a terminal illness, people in stage seven are nearing death. In stage seven of the disease, people lose the ability to communicate or respond to their environment. While they may still be able to utter words and phrases, they have no insight into their condition and need assistance with all activities of daily living. In the final stages of Alzheimer’s, people may lose their ability to swallow.</p>
          </li>
        </ol>
      </Subsection>
      <Section
        title="Health"
        subtitle="diet and exercise"
        hash="health"
      />
      <Section
        title="Games"
        subtitle="engage the mind"
        hash="games"
      />
      <Section
        title="Tips"
        subtitle="further recommendations"
        hash="tips"
      />
    </Root>
  );
}

export default App;

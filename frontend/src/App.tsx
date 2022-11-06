import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { CreateExpert, ExpertList, Experts } from "./experts/experts";
import {
  CreateInnovator,
  InnovatorList,
  Innovators,
} from "./innovators/innovators";
import { Main } from "./main/main";
import { Matches } from "./innovators/matches";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<ProjectInfo />} />
          <Route path="experts" element={<Experts />}>
            <Route index element={<ExpertList />} />
            <Route path=":expertId" element={<Expert />} />
            <Route path="create" element={<CreateExpert />} />
          </Route>
          <Route path="innovators" element={<Innovators />}>
            <Route index element={<InnovatorList />} />
            <Route path=":innovationId" element={<Innovation />} />
            <Route path="create" element={<CreateInnovator />} />
            <Route path=":id/matches" element={<Matches />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Expert = () => {
  return <div></div>;
};

const Innovation = () => {
  return <div></div>;
};

const ProjectInfo = () => {
  return(
  <div>
    <h1>Prototype of InventionTinder</h1>
    <p>This is a prototype of the matching algorithm for "InventionTinder" project at Junction 2022.<br></br>
    Get to know our problem and solution in detail from here: 
     <Link to="https://github.com/markkuleppala/keksintosaatio/blob/innovator/Solution-Junction2022.pdf" target="_blanc">https://github.com/markkuleppala/keksintosaatio/blob/main/Solution-Junction2022.pdf</Link></p>
    <h3>Instructions to test matching:</h3>
    <ol>
      <li>Go to inventors -section</li>
      <li>Next to an inventor, select "Find expert matches"</li>
      <li>A request will be sent to compare the inventor information against the experts, and list of potentially relevant experts is returned.</li>
    </ol>
  </div>
  );
};

export default App;

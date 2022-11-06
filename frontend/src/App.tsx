import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateExpert, ExpertList, Experts } from "./experts/experts";
import {
  CreateInnovator,
  InnovatorList,
  Innovators,
} from "./innovators/innovators";
import { Main } from "./main/main";
import junction from "./assets/junction.png";
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

const Innovations = () => {
  return <div></div>;
};

const Innovation = () => {
  return <div></div>;
};

const CreateInnovation = () => {
  return <div></div>;
};

const ProjectInfo = () => {
  return (
    <div>
      <h1>Prototype of inventor tinder</h1>
      <p>
        This is a prototype of the matching algorithm for "Inventor tinder"
        project at Junction 2022.<br></br>Get to know our problem and solution
        in detail from here:
      </p>
    </div>
  );
};

export default App;

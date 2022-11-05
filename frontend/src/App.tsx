import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateExpert, ExpertList, Experts } from "./experts/experts";
import { CreateInnovator, InnovatorList, Innovators } from "./innovators/innovators";
import { Main } from "./main/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="experts" element={<Experts />}>
            <Route index element={<ExpertList />} />
            <Route path=":expertId" element={<Expert />} />
            <Route path="create" element={<CreateExpert />} />
          </Route>
          <Route path="innovators" element={<Innovators />}>
            <Route index element={<InnovatorList />} />
            <Route path=":innovationId" element={<Innovation />} />
            <Route path="create" element={<CreateInnovator />} />
          </Route>
          <Route path="matcher" element={<Matcher />} />
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

const Matcher = () => {
  return <div></div>;
};

export default App;

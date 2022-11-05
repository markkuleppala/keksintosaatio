import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./main/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="experts" element={<Experts />}>
            <Route path=":expertId" element={<Expert />} />
            <Route path="create" element={<CreateExpert />} />
          </Route>
          <Route path="innovations" element={<Innovations />}>
            <Route path=":innovationId" element={<Innovation />} />
            <Route path="create" element={<CreateInnovation />} />
          </Route>
          <Route path="matcher" element={<Matcher />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Experts = () => {
  return <div></div>;
};

const Expert = () => {
  return <div></div>;
};

const CreateExpert = () => {
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

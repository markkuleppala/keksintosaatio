import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Main = () => {
  return (
    <>
      <MainHeader>
        <img src={logo} alt="logo" />
        <div>InnovationTinder</div>
        <MainLinks>
          <Link to={"/innovators"}>Innovators</Link>
          <Link to={"/experts"}>Experts</Link>
        </MainLinks>
      </MainHeader>
      <Outlet />
    </>
  );
};

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  img {
    max-height: 1rem;
  }
`;

const MainLinks = styled.div``;

export { Main };

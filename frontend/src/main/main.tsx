import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Main = () => {
  return (
    <>
      <MainHeader>
        <Link to={"/"}><img src={logo} alt="logo" /></Link>
        <div>InnovationTinder</div>
        <MainLinks>
          <StyledLink to={"/innovators"}>Innovators</StyledLink>
          <StyledLink to={"/experts"}>Experts</StyledLink>
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

const StyledLink = styled(Link)`
  padding: 0.5rem;
`;

export { Main };

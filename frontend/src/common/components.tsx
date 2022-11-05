import styled from "styled-components";

const MainWrapper = styled.div`
  max-width: 960px;
  padding: 1rem;
`;

const Spinner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.2rem solid #ddd;
  border-top: 0.2rem solid orange;
  border-radius: 50%;
  animation: spin 1.5s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CenteredSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CenteredSpinner = () => {
  return (
    <CenteredSpinnerWrapper>
      <Spinner />
    </CenteredSpinnerWrapper>
  );
};

const InputGroup = styled.div`
  padding: 0.5rem;
`;

export { MainWrapper, Spinner, CenteredSpinner, InputGroup };

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { CenteredSpinner, InputGroup, MainWrapper, ListingWrapper } from "../common/components";
import { expertiseTypes, InnovatorType, industryTypes, maturityTypes } from "./innovatortypes";
import styled from "styled-components";

const Innovators = () => {
  return (
    <MainWrapper>
      <h1>Innovators</h1>
      <Outlet />
    </MainWrapper>
  );
};

const InnovatorList = () => {
  const [innovators, setInnovators] = useState<InnovatorType[]>([]);
  useEffect(() => {
    const fetchInnovators = async () => {
      try {
        const res = await fetch(
          "https://mockend.com/markkuleppala/keksintosaatio-mockend/inventors"
        );
        const json = await res.json();
        setInnovators(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInnovators();
  }, []);

  return (
    <>
      {innovators &&
        innovators.map((innovator) => (
            <ListingWrapper>
            <div key={innovator.id}>
              {innovator.firstName} {innovator.lastName} 
              <StyledLink to={`${innovator.id}/matches`}>Find expert matches</StyledLink>
              <br></br>
              Idea name: {innovator.ideaName}
              <br></br>
            </div>
            </ListingWrapper>
        ))}
      {(!innovators || innovators?.length === 0) && <CenteredSpinner />}
    </>
  );
};

const CreateInnovator = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InnovatorType>();
  const onSubmit = handleSubmit((data) => {
    const res = fetch(
      "https://mockend.com/markkuleppala/keksintosaatio-mockend/inventors",
      { method: "POST", body: JSON.stringify(data) }
    )
      .then((resp) => {
        console.log(resp);
        //navigate("/innovators");
      })
      .catch((error) => {
        console.log("errorerror");
      });
  });

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <label>First Name</label>
        <input {...register("firstName")} />
      </InputGroup>

      <InputGroup>
        <label>Last Name</label>
        <input {...register("lastName")} />
      </InputGroup>

      <InputGroup>
        <label>Idea name</label>
        <input {...register("ideaName")} />
      </InputGroup>

      <InputGroup>
        <label>Idea description</label>
        <input {...register("ideaDescription")} />
      </InputGroup>

      <InputGroup>
        <label>Industry</label>
        <select {...register("industry")}>
          {industryTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </InputGroup>

      <InputGroup>
        <label>Expertise</label>
        <select {...register("expertise")}>
          {expertiseTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </InputGroup>

      <InputGroup>
        <label>Maturity</label>
        <select {...register("maturity")}>
          {maturityTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </InputGroup>



      <button type="button" onClick={onSubmit}>
        Add expert
      </button>
    </form>
  );
};


const StyledLink = styled(Link)`
  padding-left: 0.5rem;
`;


export { Innovators, InnovatorList, CreateInnovator };

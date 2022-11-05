/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { CenteredSpinner, InputGroup, MainWrapper } from "../common/components";
import { expertiseTypes, ExpertType, industryTypes } from "./experttypes";

const Experts = () => {
  return (
    <MainWrapper>
      <h1>Experts</h1>
      <Outlet />
    </MainWrapper>
  );
};

const ExpertList = () => {
  const [experts, setExperts] = useState<ExpertType[]>([]);
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch(
          "https://mockend.com/markkuleppala/keksintosaatio-mockend/experts"
        );
        const json = await res.json();
        setExperts(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExperts();
  }, []);

  return (
    <>
      {experts &&
        experts.map((expert) => (
          <div key={expert.id}>
            {expert.firstName} {expert.lastName}
          </div>
        ))}
      {(!experts || experts?.length === 0) && <CenteredSpinner />}
    </>
  );
};

const CreateExpert = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpertType>();
  const onSubmit = handleSubmit((data) => {
    const res = fetch(
      "https://mockend.com/markkuleppala/keksintosaatio-mockend/experts",
      { method: "POST", body: JSON.stringify(data) }
    )
      .then((resp) => {
        console.log(resp);
        //navigate("/experts");
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
        <label>Experience</label>
        <input type="number" {...register("experience")} />
      </InputGroup>

      <InputGroup>
        <label>Maturity</label>
        <input type="number" {...register("maturity")} />
      </InputGroup>

      <button type="button" onClick={onSubmit}>
        Add expert
      </button>
    </form>
  );
};

export { Experts, ExpertList, CreateExpert };

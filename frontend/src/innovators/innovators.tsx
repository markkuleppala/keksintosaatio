/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { CenteredSpinner, InputGroup, MainWrapper } from "../common/components";
import { expertiseTypes, InnovatorType, industryTypes, maturityTypes } from "./innovatortypes";

const Innovators = () => {
  return (
    <MainWrapper>
      <h1>Innovators</h1>
      <Outlet />
    </MainWrapper>
  );
};

const InnovatorList = () => {
  const [experts, setExperts] = useState<InnovatorType[]>([]);
  useEffect(() => {
    const fetchInnovators = async () => {
      try {
        const res = await fetch(
          "https://mockend.com/markkuleppala/keksintosaatio-mockend/inventors"
        );
        const json = await res.json();
        setExperts(json);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInnovators();
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

export { Innovators, InnovatorList, CreateInnovator };

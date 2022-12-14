import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CenteredSpinner } from "../common/components";
import { ExpertCard } from "../experts/expertcard";
import { ExpertType } from "../experts/experttypes";
import { InnovatorType } from "./innovatortypes";

async function getInnovator(id: string): Promise<InnovatorType> {
  const inventor = await fetch(
    `https://mockend.com/markkuleppala/keksintosaatio-mockend/inventors/${id}`
  );
  if (inventor.ok) return inventor.json();
  return Promise.reject("Something went wrong while fetching inventor");
}

async function getMatches(innovator: InnovatorType): Promise<ExpertType[]> {
  const matches = await fetch(
    `https://us-central1-junction-keksintosaatio.cloudfunctions.net/matches/`,
    {
      method: "POST",
      body: JSON.stringify(innovator),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  if (matches.ok) return matches.json();
  return Promise.reject("Something went wrong while fetching matches");
}

const Matches = () => {
  const { id } = useParams();
  const [innovator, setInnovator] = useState<InnovatorType>();
  const [matches, setMatches] = useState<ExpertType[]>();

  useEffect(() => {
    if (id) {
      getInnovator(id)
        .then((innovator) => {
          setInnovator(innovator);
          return getMatches(innovator);
        })
        .then((matches) => {
          setMatches(matches.reverse());
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <>
      {innovator && (
        <h2>
          Matches for {innovator.lastName} {innovator.firstName}
        </h2>
      )}
      {!matches && <CenteredSpinner />}
      {matches &&
        matches.map((match) => <ExpertCard expert={match} key={match.id} />)}
    </>
  );
};

export { Matches };

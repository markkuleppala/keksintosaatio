import styled from "styled-components";
import { ExpertType } from "./experttypes";

interface ExpertCardProps {
  expert: ExpertType;
}

export const ExpertCard = ({ expert }: ExpertCardProps) => {
  return (
    <CardWrapper opacity={expert.score || 0}>
      <CardInfo>
        <InfoHeader>
          {expert.firstName} {expert.lastName}
        </InfoHeader>
        <div>
          {expert.expertise} ({expert.experience} years)
        </div>
      </CardInfo>
      <h3>{expert.score && `${expert.score * 100}%`}</h3>
    </CardWrapper>
  );
};

interface Props {
  opacity: number;
}

const CardWrapper = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  background-color: rgba(251, 206, 177, ${(props) => props.opacity});
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
`;

const InfoHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

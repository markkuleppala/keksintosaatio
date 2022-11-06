import { ExpertType } from "./experttypes";

interface ExpertCardProps {
  expert: ExpertType;
}

export const ExpertCard = ({ expert }: ExpertCardProps) => {
  return (
    <div>
      {expert.score && `[${expert.score}]`} {expert.firstName} {expert.lastName}
    </div>
  );
};

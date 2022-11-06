import { ExpertType } from "./experttypes"

interface ExpertCardProps {
    expert: ExpertType
}

export const ExpertCard = ({expert}: ExpertCardProps) => {
    return <div>{expert.firstName} {expert.lastName}</div>
}
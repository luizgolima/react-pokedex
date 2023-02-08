import { FC } from "react";

interface ICardProps {
  name: string;
  image: string;
}

const Card: FC<ICardProps> = ({ image, name }) => (
  <div className="card">
    {name}
    <img src={image} alt="" />
  </div>
);
export default Card;

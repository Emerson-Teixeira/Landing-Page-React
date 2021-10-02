import {CardContainer} from "./Styles/CardContainer.styled.js"


export default function Card({ item: { id, title, body, image } }) {
  return (
    <CardContainer layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </CardContainer>
  );
}

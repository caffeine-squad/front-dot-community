import { Link } from "react-router-dom";
import { Line } from "../Login/styles";
import { TextCardStyles } from "./styles";

interface Props {
  title: string,
  text: string,
  link: string
}

export function TextCard({title, text, link}: Props){
  return(
    <TextCardStyles>
      <Line>
        <span title={title}>{title}</span>
        <p>{text}</p>
        <Link to={link} >
            <span>Saiba mais...</span>
        </Link>
      </Line>
    </TextCardStyles>
  );
}
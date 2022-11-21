import { Button, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { BannerTextCardStyles } from "./styles";

interface Props {
  title?: string,
  text: string,
  link: string
}

export function BannerTextCard({title, text, link}: Props){
  const cardTitle = title ? <Title order={4}>{title}</Title> : <Title order={4} styles="display: none">{title}</Title>;
  return(
    <BannerTextCardStyles>
      {cardTitle}

      <p>{text}</p>

      <Link to={link} >
        <Button className=" button bg-primary-accent hover:bg-secondary-accent" >
          Seja Membro
        </Button>
      </Link>
      
    </BannerTextCardStyles>
  );
}
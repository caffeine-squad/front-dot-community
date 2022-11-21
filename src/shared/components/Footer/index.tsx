import { Title, Text } from "@mantine/core";
import { Container, SectionIcon } from "./styles";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";


export function Footer() {
  return (
    <Container>
      <Title order={4}>DOT Community</Title>
      <SectionIcon>
        <IoLogoGithub className="text-[1.5rem] mr-3"/>
        <IoLogoLinkedin className="text-[1.5rem] mr-3"/>
        <IoLogoInstagram className="text-[1.5rem]"/>
      </SectionIcon>
      <Text>Feito com  ♥  por Caffeine Squad.</Text>
    </Container>
  )
}
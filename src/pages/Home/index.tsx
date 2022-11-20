import { Section } from "../../shared/components/Section";
import { TextCard } from "../../shared/components/TextCard";
import { HomeStyles } from "./styles";
import BannerDonationImage from "../../assets/banner-donation.png";
import { BannerTextCard } from "../../shared/components/SectionBanner/BannerTextCard";
import { SectionBanner } from "../../shared/components/SectionBanner";

export function Home(){
  return(
    <HomeStyles>
      <SectionBanner isBackgroundGray90={false}>
        
        <BannerTextCard
            title="Conectando pessoas e difundindo a doação e transplante de órgãos." 
            text="Temos mais de 34 mil brasileiros aguardando 
                  por um transplante. Você pode ajudar a diminuir 
                  esse número."
            link="/cadastro"
        />
        
        <img src={BannerDonationImage} alt="Banner Donation - from freepik" title="Banner Donation - Image from freepik" />
        
      </SectionBanner>

      <Section title="Sobre nós" isBackgroundGray90={true}>
        
        <TextCard
            title="Missão" 
            text="Buscamos sensibilizar e informar a população 
                  sobre a importância da doação de órgãos e tecidos, 
                  e criar uma grande corrente do bem para abraçar 
                  essa causa."
            link="/sobre"
          />

          <TextCard
            title="Visão" 
            text="Buscamos sensibilizar e informar a população 
                  sobre a importância da doação de órgãos e tecidos, 
                  e criar uma grande corrente do bem para abraçar 
                  essa causa."
            link="/sobre"
          />

          <TextCard
            title="Valores" 
            text="Buscamos sensibilizar e informar a população 
                  sobre a importância da doação de órgãos e tecidos, 
                  e criar uma grande corrente do bem para abraçar 
                  essa causa."
            link="/sobre"
          />
          
      </Section>

      <Section title="Tópicos Recentes" isBackgroundGray90={false}>
        
        <TextCard
            title="Missão" 
            text="Buscamos sensibilizar e informar a população 
                  sobre a importância da doação de órgãos e tecidos, 
                  e criar uma grande corrente do bem para abraçar 
                  essa causa."
            link="/sobre"
          />

          <TextCard
            title="Visão" 
            text="Buscamos sensibilizar e informar a população 
                  sobre a importância da doação de órgãos e tecidos, 
                  e criar uma grande corrente do bem para abraçar 
                  essa causa."
            link="/sobre"
          />

          <TextCard
            title="Valores" 
            text="Buscamos sensibilizar e informar a população 
                  sobre a importância da doação de órgãos e tecidos, 
                  e criar uma grande corrente do bem para abraçar 
                  essa causa."
            link="/sobre"
          />
          
      </Section>

    </HomeStyles>
  );
}
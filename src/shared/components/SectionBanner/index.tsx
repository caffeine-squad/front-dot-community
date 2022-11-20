import { Title } from "@mantine/core";
import { SectionBannerStyles } from "./styles";

interface Props {
    title?: string,
    children: React.ReactNode,
    isBackgroundGray90: boolean,
}

export function SectionBanner({title, children, isBackgroundGray90}: Props){
    
    return(
        <SectionBannerStyles
            className={isBackgroundGray90 ? 'isBackgroundGray90' : 'isBackgroundBrightGray'}
        >
            <Title order={4}>{title}</Title>

            <div className="display-direction">
                {children}
            </div>
        </SectionBannerStyles>
    );
}
import { Title } from "@mantine/core";
import { SectionStyles } from "./styles";

interface Props {
    title?: string,
    children: React.ReactNode,
    isBackgroundGray90: boolean,
}

export function Section({title, children, isBackgroundGray90}: Props){
    
    return(
        <SectionStyles
            className={isBackgroundGray90 ? 'isBackgroundGray90' : 'isBackgroundBrightGray'}
        >
            <Title order={4}>{title}</Title>

            <div className="display-direction">
                {children}
            </div>
        </SectionStyles>
    );
}
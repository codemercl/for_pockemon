import { FC, ReactNode } from "react";
import { Content, GridLayout, Sidebar, Wrapper } from "./styles";

interface LayoutProps {
    sidebar: ReactNode;
    children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ sidebar, children }) => {
    return (
        <Wrapper>
            <GridLayout>
                <Sidebar>{sidebar}</Sidebar>
                <Content>{children}</Content>
            </GridLayout>
        </Wrapper>
    );
};

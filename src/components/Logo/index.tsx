import { FC } from "react";
import styled from "styled-components";

interface Props {
    source: string;
    alt: string;
}

const Image = styled.img`
    display: block;
    width: 170px;
    height: auto;
    object-fit: cover;
`;

export const Logo: FC<Props> = ({ source, alt }) => {
    return <Image src={source} alt={alt} />;
};
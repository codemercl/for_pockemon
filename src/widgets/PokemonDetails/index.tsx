import { FC, ReactNode } from 'react';
import { PokemonListResponse } from 'src/app/providers/types';
import { Logo } from 'src/components';
import { Container, ContentContainer, LogoContainer } from './styles';

interface PokemonDetailsProps {
    selectedPokemon: PokemonListResponse | null;
    children: ReactNode;
}

export const PokemonDetails: FC<PokemonDetailsProps> = ({ selectedPokemon, children }) => {
    return (
        <Container>
            <LogoContainer>
                {selectedPokemon?.sprites && selectedPokemon?.sprites.front_default && (
                    <Logo source={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                )}
            </LogoContainer>
            <ContentContainer>
                {children}
            </ContentContainer>
        </Container>
    );
};

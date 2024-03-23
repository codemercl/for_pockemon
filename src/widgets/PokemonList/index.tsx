import { FC } from 'react';
import { Button } from 'src/components';
import { PokemonListResponse } from 'src/app/providers/types';
import { StyledButton, StyledPokemonList, StyledWrapper } from './styles';

interface PokemonListProps {
    pokemonList: PokemonListResponse[];
    handlePokemonClick: (pokemonName: string) => void;
    handleLimitChange: (limit: number) => void;
}

export const PokemonList: FC<PokemonListProps> = ({ pokemonList, handlePokemonClick, handleLimitChange }) => {
    return (
        <StyledWrapper>
            <StyledPokemonList>
                {pokemonList.map((pokemon, index) => (
                    <Button key={index} onClick={() => handlePokemonClick(pokemon.name)}>
                        {pokemon.name}
                    </Button>
                ))}
            </StyledPokemonList>
            <StyledButton onClick={() => handleLimitChange(10)}>Загрузить 10 покемонов</StyledButton>
            <StyledButton onClick={() => handleLimitChange(30)}>Загрузить 30 покемонов</StyledButton>
        </StyledWrapper>
    );
};
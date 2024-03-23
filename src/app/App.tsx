import React, { useState } from 'react';
import 'src/app/style/global.scss';
import { Layout } from 'src/components';
import { Ability, Statistics } from 'src/widgets/PokemonDetails/components';
import { PokemonDetails, PokemonList } from 'src/widgets';
import { useGetPokemonListQuery, useGetPokemonDetailsQuery } from 'src/app/providers/api';
import { usePokemonLimit, useRandomStats } from 'src/hooks';
import { PokemonListResponse } from './providers/types';

const App: React.FC = () => {
  const getRandomStats = useRandomStats();
  const { limit, handleLimitChange } = usePokemonLimit();

  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const { data: pokemonList = { results: [] as PokemonListResponse[] } } = useGetPokemonListQuery(limit);
  const { data: selectedPokemonData = null } = useGetPokemonDetailsQuery(selectedPokemon ?? '');

  const handlePokemonClick = (pokemonName: string) => {
    setSelectedPokemon(pokemonName);
  };

  return (
    <Layout
      sidebar={<PokemonList pokemonList={('results' in pokemonList ? pokemonList.results : pokemonList) as PokemonListResponse[]} handlePokemonClick={handlePokemonClick} handleLimitChange={handleLimitChange} />}
    >
      <PokemonDetails selectedPokemon={selectedPokemonData}>
        {selectedPokemonData?.abilities?.map((ability, abilityIndex) => (
          <Ability key={abilityIndex} ability={ability} />
        ))}
        {selectedPokemonData?.stats && (
          <Statistics key="statistics" stats={getRandomStats(selectedPokemonData.stats)} />
        )}
      </PokemonDetails>
    </Layout>
  );
};

export default App;
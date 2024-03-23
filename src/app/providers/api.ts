import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonDetailsResponse, PokemonListResponse, PokemonTransResponse } from './types';

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonList: builder.query<PokemonListResponse, number>({
            query: (limit) => `pokemon?limit=${limit}`,
        }),
        getPokemonDetails: builder.query<PokemonDetailsResponse, string>({
            query: (name) => `pokemon/${name}`,
        }),
        getAbilityTranslation: builder.query<PokemonTransResponse, string>({
            query: (abilityName) => `ability/${abilityName}`,
        }),
    }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery, useGetAbilityTranslationQuery } = pokemonApi;
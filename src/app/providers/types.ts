export interface PokemonListResponse {
    name: string;
    abilities: { ability: { name: string } }[];
    sprites: { front_default: string };
}

export interface PokemonDetailsResponse {
    name: string;
    abilities: { ability: { name: string } }[];
    sprites: { front_default: string };
    stats: {
        base_stat: string,
        effort: string,
        stat: { name: string, url: string }
    }
}

export interface PokemonTransResponse {
    names?: {
        name?: string;
        language?: {
            name?: string;
            url?: string;
        };
    }[] | any;
    count?: number;
    next?: string | null;
    previous?: string | null;
}
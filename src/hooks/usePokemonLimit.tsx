import { SetStateAction, useState } from 'react';

export const usePokemonLimit = () => {
    const [limit, setLimit] = useState(10);

    const handleLimitChange = (newLimit: SetStateAction<number>) => {
        setLimit(newLimit);
    };

    return {
        limit,
        handleLimitChange,
    };
}
import React from 'react';
import { useGetAbilityTranslationQuery } from 'src/app/providers/api';

interface TranslationProps {
    abilityName: string;
}

export const Translation: React.FC<TranslationProps> = ({ abilityName }) => {
    const { data: abilityTranslation } = useGetAbilityTranslationQuery(abilityName ?? '');

    const randomCount = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    if (!abilityTranslation) {
        return <p>Loading...</p>;
    }

    return (
        <ul>
            {abilityTranslation.names
                ?.slice(0, randomCount)
                .map((translation: { name: string }, index: number) => (
                    <li key={index}>{translation.name}</li>
                ))}
        </ul>
    );
};

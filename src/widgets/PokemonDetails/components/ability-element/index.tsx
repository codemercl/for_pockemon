import { FC } from 'react';
import { Translation } from '../translate-element';
import { AbilityType } from 'src/widgets/types';
import { AbilityContainer, AbilityName, AbilityTitle, TranslationContainer } from './styles';

interface AbilityProps {
    ability: AbilityType;
}

export const Ability: FC<AbilityProps> = ({ ability }) => {
    return (
        <div>
            <AbilityContainer>
                <AbilityTitle>Способность:</AbilityTitle>
                <AbilityName>{ability.ability.name}</AbilityName>
            </AbilityContainer>
            <AbilityContainer>
                <AbilityTitle>Переводы:</AbilityTitle>
                <TranslationContainer>
                    <Translation abilityName={ability.ability.name} />
                </TranslationContainer>
            </AbilityContainer>
        </div>
    );
};

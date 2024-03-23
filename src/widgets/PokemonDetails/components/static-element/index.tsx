import React from "react";
import { StatisticType } from "src/widgets/types";
import { AbilityTitle, StatisticItem, StatisticName, StatisticsList } from "./styles";

interface StatisticsProps {
    stats: StatisticType[];
}

export const Statistics: React.FC<StatisticsProps> = ({ stats }) => {
    return (
        <>
            <AbilityTitle>Характеристики:</AbilityTitle>
            <StatisticsList>
                {stats.map((stat, index) => (
                    <StatisticItem key={index}>
                        <StatisticName>{stat.stat.name}:</StatisticName> {stat.base_stat}
                    </StatisticItem>
                ))}
            </StatisticsList>
        </>
    );
};
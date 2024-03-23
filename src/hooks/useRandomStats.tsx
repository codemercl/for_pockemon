export const useRandomStats = () => {
  const getRandomStats = (stats: any): any[] => {
    const copiedStats = [...stats];
    const shuffledStats = copiedStats.sort(() => 0.5 - Math.random());
    return shuffledStats.slice(0, 4);
  };

  return getRandomStats;
};

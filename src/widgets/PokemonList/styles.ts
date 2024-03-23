import styled from 'styled-components';

export const StyledWrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const StyledPokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
`;

export const StyledButton = styled.button`
    display: block;
    border: 1px solid #000;
    padding: 10px 30px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;
`;

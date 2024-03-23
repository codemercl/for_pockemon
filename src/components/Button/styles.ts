import styled from 'styled-components';

export const StyledButton = styled.button`
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-image: url('https://cdn-icons-png.flaticon.com/512/188/188918.png');
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 11px;
`;
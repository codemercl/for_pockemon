import { FC, ButtonHTMLAttributes } from "react";
import { ButtonText, StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  customClassName?: string;
  handleClick?: () => void;
};


export const Button: FC<ButtonProps> = ({ customClassName, handleClick, children, ...rest }) => {
  return (
    <StyledButton className={customClassName} onClick={handleClick} {...rest}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

import { FunctionComponent, ReactNode } from "react";

type ButtonProps = {
  isDisabled?: boolean;
  additionalClassNames?: string;
  onClick: () => void;
  children?: ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({
  isDisabled = false,
  additionalClassNames = "",
  onClick,
  children,
}) => {
  return (
    <button
      disabled={isDisabled}
      className={`bg-primary w-fit rounded-2xl text-white text-2xl px-10 py-3.5 transition-all hover:bg-secondary hover:text-primary ${additionalClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

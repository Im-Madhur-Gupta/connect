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
      className={`primary-btn w-fit rounded-2xl text-white text-2xl px-10 py-3.5 transition-all ${additionalClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

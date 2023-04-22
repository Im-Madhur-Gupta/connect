import { FunctionComponent, ReactNode } from "react";

type ButtonProps = {
  additionalClassNames?: string;
  onClick: () => void;
  children?: ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({
  children,
  additionalClassNames = "",
  onClick,
}) => {
  return (
    <button
      className={`primary-btn w-fit rounded-2xl text-white text-2xl px-10 py-3.5 transition-all ${additionalClassNames}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

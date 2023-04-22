import { FunctionComponent, ReactNode } from "react";

type SubHeadingProps = {
  additionalClassNames?: string;
  children?: ReactNode;
};

const SubHeading: FunctionComponent<SubHeadingProps> = ({
  additionalClassNames = "",
  children,
}) => {
  return (
    <h2 className={`text-2xl text-secondary ${additionalClassNames}`}>
      {children}
    </h2>
  );
};

export default SubHeading;

import { FunctionComponent, ReactNode } from "react";

type HeadingProps = {
  additionalClassNames?: string;
  children?: ReactNode;
};

const Heading: FunctionComponent<HeadingProps> = ({
  additionalClassNames = "",
  children,
}) => {
  return (
    <h1 className={`text-4xl text-primary ${additionalClassNames}`}>
      {children}
    </h1>
  );
};

export default Heading;

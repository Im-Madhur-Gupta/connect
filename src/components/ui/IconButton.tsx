type IconButtonProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
};

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  children,
  isDisabled = false,
}) => {
  return (
    <button disabled={isDisabled} className="w-14 h-14 rounded-full my-8 mx-3">
      {children}
    </button>
  );
};

export default IconButton;

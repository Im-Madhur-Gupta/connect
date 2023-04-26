type IconButtonProps = {
  children: React.ReactNode;
  isDisabled?: boolean;
  onClick: () => void;
};

const IconButton: React.FunctionComponent<IconButtonProps> = ({
  children,
  isDisabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className="w-14 h-14 rounded-full my-8 mx-3"
    >
      {children}
    </button>
  );
};

export default IconButton;

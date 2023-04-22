import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Connect seamlessly",
        1100,
        "Connect anywhere",
        1150,
        "Connect ",
        400,
        "Connect anytime",
        2000,
      ]}
      speed={30}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{
        fontSize: "2.25rem",
        display: "inline-block",
        color: "white",
        marginTop: "1rem",
        marginLeft: "0.3rem",
      }}
    />
  );
};
export default TypingAnimation;

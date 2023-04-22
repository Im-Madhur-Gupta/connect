import Lottie from "lottie-react";

import landingPageAnimation from "@/assets/landing-page-animation.json";

const LandingAnimation = () => {
  return (
    <Lottie
      animationData={landingPageAnimation}
      loop={true}
      style={{ width: "40vw" }}
    />
  );
};
export default LandingAnimation;

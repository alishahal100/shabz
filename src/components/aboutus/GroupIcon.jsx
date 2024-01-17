import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const GroupIcon = ({ scrollY }) => {
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;

    // Initial position of the ball
    const initialLeft = "50%";
    const initialTop = "50%";

    // Trigger the timeline when the user scrolls to the component
    const handleScroll = () => {
      const componentTop = ball.offsetTop;
      const scrollProgress = (scrollY - componentTop) / window.innerHeight;

      // Check if the component is in view
      if (scrollProgress > 0 && scrollProgress < 1) {
        // Calculate the new position based on scroll progress
        const newLeft = `calc(${initialLeft} + ${scrollProgress * 20}%)`;
        const newTop = `calc(${initialTop} + ${scrollProgress * 20}%)`;

        // Update the ball position and opacity
        gsap.to(ball, {
          left: newLeft,
          top: newTop,
          opacity: 1,
          duration: 0.5, // Adjust duration for smoothness
          ease: "power2.out", // Adjust easing for the desired effect
        });
      } else {
        // Hide the ball if the component is not in view
        gsap.to(ball, { opacity: 0, duration: 0.5 });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="group-icon" style={{ position: "relative" }}>
      <div
        ref={ballRef}
        style={{
          position: "fixed",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#e4d48c", // Customize the ball color
          zIndex: 1,
          top: "60%", // Center the ball vertically
          left: "50%", // Center the ball horizontally
          transform: "translate(-50%, -50%)", // Center the ball both vertically and horizontally
          opacity: 0, // Initially hidden
          transition: "opacity 0.5s", // Add a transition for opacity
        }}
      />
      <img
        className="mb-20 w-[518.68px] h-[367.3px] "
        alt=""
        src="/group.svg"
        style={{ position: "relative", zIndex: -1, marginBottom: "200px" }}
      />
    </div>
  );
};

export default GroupIcon;

import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";

const color = "pink";
const spin = keyframes`
  to {
    transform: rotate(360deg)
  }
`;
const NavBar = () => {
  const [padding, setPadding] = useState(15);
  const [speed, setSpeed] = useState(600);
  return (
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${color};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt me not!</Link>
      <span
        onClick={() => setSpeed(speed - 50)}
        css={css`
          font-size: 60px;
          display: inline-block;
          animation: ${speed}ms ${spin} linear infinite;
        `}
        aria-label="logo"
        role="img"
      >
        🐩
      </span>
    </header>
  );
};

export default NavBar;

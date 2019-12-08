import * as React from "react";
import styled from "styled-components";

export const Header: React.FC = () => (
  <Base>
    <h1>
      <span role="img" aria-label="emoji">
        🚀
      </span>{" "}
      SpaceX Monitor
    </h1>
  </Base>
);

const Base = styled.header`
  top: 0;
  z-index: 1;
  margin: 0 auto;
  position: sticky;
  max-width: 1100px;
  padding: 36px 24px 24px;
  background-color: #282c34;
  h1 {
    margin: 0;
    color: #fff;
    font-size: 1.3em;
  }
`;

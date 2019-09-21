import * as React from "react";
import styled from "styled-components";

export const Header: React.FC = () => (
  <Base>
    <h1>🚀 SpaceX Monitor</h1>
  </Base>
);

const Base = styled.header`
  top: 0;
  margin: 0 auto;
  max-width: 900px;
  position: sticky;
  padding: 36px 24px 24px;
  background-color: #282c34;
  h1 {
    margin: 0;
    color: #fff;
    font-size: 1.3em;
  }
`;

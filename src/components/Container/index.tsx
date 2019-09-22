import * as React from "react";
import styled from "styled-components";

interface Props {
  leftComp: JSX.Element;
  rightComp: JSX.Element;
}

export const Container: React.FC<Props> = ({ leftComp, rightComp }) => (
  <Base>
    <Left>{leftComp}</Left>
    <Right>{rightComp}</Right>
  </Base>
);

const Base = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 0 24px;
  max-width: 1100px;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 3;
  margin-left: 24px;
`;

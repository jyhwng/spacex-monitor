import * as React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Tag: React.FC<Props> = ({ children, ...props }) => <Base {...props}>{children}</Base>;

const Base = styled.button`
  margin: 0;
  color: #673ab7;
  font-size: 16px;
  appearance: none;
  padding: 4px 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

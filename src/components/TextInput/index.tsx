import * as React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: React.FC<Props> = props => <Base {...props} type="text"></Base>;

const Base = styled.input`
  margin: 0;
  border: none;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 8px;
`;

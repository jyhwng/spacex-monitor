import * as React from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Label>
      <input {...props} type="checkbox"></input>
      <Inner>{children}</Inner>
    </Label>
  );
};

const Label = styled.label`
  color: #fff;
  display: block;
`;

const Inner = styled.span`
  margin-left: 4px;
`;

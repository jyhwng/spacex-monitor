import * as React from "react";
import styled from "styled-components";

interface Props extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
}

export const Fieldset: React.FC<Props> = ({ legend, children }) => (
  <Base>
    <Legend>{legend}</Legend>
    {children}
  </Base>
);

const Base = styled.fieldset`
  color: #fff;
  border: none;
  margin: 16px 0;
  padding: 16px 0;
`;

const Legend = styled.legend`
  font-size: 18px;
  font-weight: bold;
`;

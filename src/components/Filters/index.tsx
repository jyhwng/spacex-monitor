import * as React from "react";
import styled from "styled-components";
import { RocketFilter } from "../RocketFilter";
import { LaunchSuccessFilter } from "../LaunchSuccessFilter";
import { Search } from "../Search";

export const Filters: React.FC = () => (
  <Wrapper>
    <Search />
    <LaunchSuccessFilter />
    <RocketFilter />
  </Wrapper>
);

const Wrapper = styled.div`
  top: 90px;
  position: sticky;
`;

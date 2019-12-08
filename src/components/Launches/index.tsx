import * as React from "react";
import { LaunchInfo } from "../../types";
import styled from "styled-components";
import { Launch } from "../Launch";
import { getLaunches } from "../../services/actions/launchActions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../services/types";

export const Launches: React.FC = () => {
  const dispatch = useDispatch();
  const { launches, filtered, searchKeyword } = useSelector((state: RootState) => state.launch);

  React.useEffect(() => {
    dispatch(getLaunches());
  }, []);

  return (
    <Ul>
      {(searchKeyword ? filtered : launches).map((launch: LaunchInfo, index: number) => (
        <React.Fragment key={launch.flightNumber}>
          <Li>
            <Launch launch={launch} />
          </Li>
        </React.Fragment>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  margin-top: 0;
  padding-left: 0;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 767px) {
    display: block;
  }
`;

const Li = styled.li`
  @media (max-width: 767px) {
    margin-bottom: 16px;
  }
`;

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
          {(index + 1) % 2 === 0 && <RowGap />}
          <Li>
            <Launch launch={launch} />
          </Li>
          {(index + 1) % 2 === 0 && <Linebreak />}
        </React.Fragment>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  margin-top: 0;
  padding-left: 0;
  flex-wrap: wrap;
  list-style: none;
`;

const Li = styled.li`
  flex: 1;
`;

const RowGap = styled.div`
  width: 16px;
`;

const Linebreak = styled.div`
  width: 0;
  height: 16px;
  flex-basis: 100%;
`;

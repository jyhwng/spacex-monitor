import * as React from "react";
import { Tag } from "../Tag";
import { useDispatch } from "react-redux";
import { setQuery } from "../../services/actions/queryActions";
import { getLaunches } from "../../services/actions/launchActions";
import { Fieldset } from "../Fieldset";

export const RocketFilter: React.FC = () => {
  const dispatch = useDispatch();

  const onClickRocketTag = (e: React.SyntheticEvent) => {
    dispatch(setQuery({ rocketId: e.currentTarget.id }));
    dispatch(getLaunches());
  };

  return (
    <Fieldset>
      <legend>Rocket</legend>
      <Tag onClick={onClickRocketTag} id="falcon1">
        Falcon 1
      </Tag>
      <Tag onClick={onClickRocketTag} id="falcon9">
        Falcon 9
      </Tag>
      <Tag onClick={onClickRocketTag} id="falconheavy">
        Falcon Heavy
      </Tag>
    </Fieldset>
  );
};

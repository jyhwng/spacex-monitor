import * as React from "react";
import { Checkbox } from "../Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../services/actions/queryActions";
import { getLaunches } from "../../services/actions/launchActions";
import { Fieldset } from "../Fieldset";
import { RootState } from "../../services/types";

export const LaunchSuccessFilter: React.FC = () => {
  const dispatch = useDispatch();
  const isChecked = useSelector((state: RootState) => state.query.launchSuccess);

  const _onChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    dispatch(setQuery({ launchSuccess: currentTarget.checked }));
    dispatch(getLaunches());
  };

  return (
    <Fieldset legend="Filters">
      <Checkbox checked={!!isChecked} onChange={e => _onChange(e)}>
        Successful
      </Checkbox>
    </Fieldset>
  );
};

import * as React from "react";
import { Checkbox } from "../Checkbox";
import { useDispatch } from "react-redux";
import { setQuery } from "../../services/actions/queryActions";
import { getLaunches } from "../../services/actions/launchActions";
import { Fieldset } from "../Fieldset";

export const LaunchSuccessFilter: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setQuery({ launchSuccess: isChecked }));
    dispatch(getLaunches());
  }, [isChecked]);

  return (
    <Fieldset legend="Filters">
      <Checkbox checked={isChecked} onChange={e => setIsChecked(e.currentTarget.checked)}>
        Successful
      </Checkbox>
    </Fieldset>
  );
};

import * as React from "react";
import { TextInput } from "../TextInput";
import { useDispatch } from "react-redux";
import { filterByMissionName } from "../../services/actions/launchActions";

export const Search: React.FC = () => {
  const [keyword, setKeyword] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(filterByMissionName(keyword));
  }, [keyword]);

  return (
    <TextInput
      placeholder="Search by mission"
      onChange={e => setKeyword(e.target.value)}
    ></TextInput>
  );
};

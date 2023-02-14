import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const useQueryParameter = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const search = new URLSearchParams(location.search);

    setQuery(search.get(searchQueryParamName));
  }, [location, searchQueryParamName]);

  return query;
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const history = useHistory();

  const replaceQueryParameter = ({ key, value }) => {
    if (value === "") {
      search.delete(key);
    } else {
      search.set(key, value);
    }

    history.replace(`${location.pathname}?${search.toString()}`);
  };

  return replaceQueryParameter;
};

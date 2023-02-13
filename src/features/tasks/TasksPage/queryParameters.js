import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const useQueryParameter = () => {
  const location = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setQuery(searchParams.get(searchQueryParamName));
  }, [location, searchQueryParamName]);

  return query;
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const history = useHistory();

  const replaceQueryParameter = () => {
    if (query === "") {
      query.delete(searchQueryParamName);
    } else {
      history.replace(`${location.pathname}?${searchQueryParamName}`);
    }
  };

  return replaceQueryParameter;
};

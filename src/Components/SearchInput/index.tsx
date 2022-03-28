import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../../Redux/App/App.actions";
import { appSelector } from "../../Redux/App/App.selectors";

import * as S from "./index.styles";

function SearchInput() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState<boolean>(false);
  const { search } = useSelector(appSelector);

  const input = React.useRef<HTMLInputElement>(null);

  const handleOpenSearch = () => {
    if (!open) {
      input.current?.focus();
    } else {
      dispatch(setSearch(""));
    }
    setOpen(!open);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  React.useLayoutEffect(() => {});

  return (
    <S.StyledWrapper>
      {open ? (
        <S.StyledCloseIcon onClick={handleOpenSearch} />
      ) : (
        <S.StyledSearchIcon onClick={handleOpenSearch} />
      )}
      <S.StyledSearchInput
        type="search"
        name="search-certificates-FS"
        id="search-certificates-FS"
        placeholder="Search..."
        onChange={handleChange}
        value={search}
        ref={input}
        {...{ open: open }}
      />
    </S.StyledWrapper>
  );
}

export default SearchInput;

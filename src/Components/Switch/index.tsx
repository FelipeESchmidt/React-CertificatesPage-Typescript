import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeThemeMode } from "../../Redux/App/App.actions";
import { appSelector } from "../../Redux/App/App.selectors";

import * as S from "./index.styles";

function Switch() {
  const dispatch = useDispatch();
  const { mode } = useSelector(appSelector);

  const handleChange = () => {
    dispatch(changeThemeMode());
  };

  return (
    <S.StyledWrapper>
      <S.StyledContainer>
        <S.StyledSwitch {...{ marked: mode === "dark" }}>
          <S.StyledMarker
            id="switch-mode"
            onClick={handleChange}
            {...{ marked: mode === "dark" }}
          />
        </S.StyledSwitch>
      </S.StyledContainer>
    </S.StyledWrapper>
  );
}

export default Switch;

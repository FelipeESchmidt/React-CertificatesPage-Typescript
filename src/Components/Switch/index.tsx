import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeThemeMode } from '../../Redux/App/App.actions';
import { appSelector } from '../../Redux/App/App.selectors';

import * as S from './index.styles';

function Switch() {
  const dispatch = useDispatch();
  const { mode } = useSelector(appSelector);

  const handleChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(changeThemeMode());
  };

  const isMarked = (): boolean => mode === 'dark';

  return (
    <S.StyledWrapper>
      <S.StyledContainer onClick={handleChange}>
        <S.StyledSwitch {...{ marked: isMarked() }}>
          <S.StyledMarker id="switch-mode" {...{ marked: isMarked() }} />
        </S.StyledSwitch>
      </S.StyledContainer>
    </S.StyledWrapper>
  );
}

export default Switch;

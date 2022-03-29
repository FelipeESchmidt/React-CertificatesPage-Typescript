import React, { useEffect, useState } from 'react';
import {
  StyledLoadingWrapper,
  StyledLoading,
  StyledTitleWrapper,
  StyledTitle,
  Dots,
} from './index.styles';

const Loading = () => {
  const dotsQuantity = 3;
  const [dotsControl, setDotsControl] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotsControl(dotsControl + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  });

  const shouldBeVisible = (selfNumber: number) => {
    return dotsControl % dotsQuantity >= selfNumber;
  };

  return (
    <StyledLoadingWrapper>
      <StyledLoading />
      <StyledTitleWrapper>
        <StyledTitle>Loading</StyledTitle>
        <Dots {...{ visible: shouldBeVisible(0) }}>.</Dots>
        <Dots {...{ visible: shouldBeVisible(1) }}>.</Dots>
        <Dots {...{ visible: shouldBeVisible(2) }}>.</Dots>
      </StyledTitleWrapper>
    </StyledLoadingWrapper>
  );
};

export default Loading;

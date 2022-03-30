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

  const shouldBeVisible = () => (dotsControl % dotsQuantity) + 1;

  return (
    <StyledLoadingWrapper>
      <StyledLoading />
      <StyledTitleWrapper>
        <StyledTitle>Loading</StyledTitle>
        {Array.from(Array(shouldBeVisible())).map((_, i) => (
          <Dots data-testid="dots" key={`dot-${i}`} />
        ))}
      </StyledTitleWrapper>
    </StyledLoadingWrapper>
  );
};

export default Loading;

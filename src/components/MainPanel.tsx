import React from "react";
import styled from "styled-components";

const StyledContainerWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  grid-area: content;
  padding: 40px 20px;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  flex-grow: 1;
`;

const MainPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledContainerWrapper>
      <StyledContainer>{children}</StyledContainer>
    </StyledContainerWrapper>
  );
};

export { MainPanel };

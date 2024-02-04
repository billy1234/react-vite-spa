import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div``;
const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export { AppContainer };

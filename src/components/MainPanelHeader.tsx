import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  div:first-child {
    width: 80%;
  }
`;

const StyledActionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainPanelHeader = ({
  header,
  subHeader = "",
  description = "",
  action = null,
}: {
  header: React.ReactNode;
  subHeader: string;
  description: string;
  action?: any;
}) => {
  // if an action is specified, we need to slightly restructure the page
  if (action) {
    return (
      <StyledContainer>
        <div>
          <h1
            style={{
              marginBottom: "4px",
              color: "var(--uui-navy)",
            }}
          >
            {header}
          </h1>
          {subHeader?.length > 0 ? (
            <p className="uui-bold" style={{ marginBottom: "20px" }}>
              {subHeader}
            </p>
          ) : null}
          {description?.length > 0 ? (
            <p className="uui-large" style={{ marginBottom: "20px" }}>
              {description}
            </p>
          ) : null}
        </div>
        <StyledActionContainer>{action}</StyledActionContainer>
      </StyledContainer>
    );
  }

  return (
    <>
      <h1
        style={{
          marginBottom: "4px",
          color: "var(--uui-navy)",
        }}
      >
        {header}
      </h1>
      {subHeader?.length > 0 ? (
        <p className="uui-bold" style={{ marginBottom: "20px" }}>
          {subHeader}
        </p>
      ) : null}
      {description?.length > 0 ? (
        <p className="uui-large" style={{ marginBottom: "20px" }}>
          {description}
        </p>
      ) : null}
    </>
  );
};

export { MainPanelHeader };

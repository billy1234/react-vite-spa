//Import all needed mocks here
import mockTestService from "../test/mocks/testService";
//Execute mocks before any further imports
mockTestService();

import React from "react";
import { getByAltText, render } from "@testing-library/react";
import Home from "./Home";
import { expect, test } from "vitest";
import elementHelper from "../test/ElementHelper";

test("Renders home page", async () => {
  const { getAllByText, findByText, getByLabelText } = render(
    elementHelper(<Home />, ["/"]),
  );

  expect(
    getAllByText("This is some subheader text under main heading")[0],
  ).toBeInTheDocument();

  expect(getByLabelText(/loading facts/)).toBeInTheDocument();

  const apiElem = await findByText(/Cats are cats/);

  expect(apiElem).toBeInTheDocument();
});

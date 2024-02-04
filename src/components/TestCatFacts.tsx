import React from "react";
import { useCatFact } from "../hooks/testHook";

export default function CatFact() {
  const { data, isLoading, error } = useCatFact();

  const heading = <h1>Here is a cat fact</h1>;

  if (isLoading) {
    return (
      <>
        {heading}

        <p aria-label="loading facts">loading facts...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        {heading}
        <p>Something whent wrong fetching the cat fact</p>
      </>
    );
  }

  return (
    <>
      {heading}
      <p>{data?.fact}</p>
    </>
  );
}

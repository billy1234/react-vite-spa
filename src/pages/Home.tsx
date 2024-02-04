import React from "react";
import { MainPanelHeader } from "../components/MainPanelHeader";
import { MainPanel } from "../components/MainPanel";
import CatFact from "../components/TestCatFacts";

export default function Home() {
  return (
    <MainPanel>
      <MainPanelHeader
        header={"This is some subheader text under main heading"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec ex nulla. Nulla efficitur aliquam justo ac dignissim. Aenean tincidunt finibus sem, non luctus sem faucibus eget. Nulla sed erat congue lorem posuere suscipitut sit amet sem. Donec feugiat pharetra molestie. Nunc eu consectetur lacus. Aenean eget elit eget risus dignissim dapibus"
        }
        subHeader={"This is some subheader text under main heading"}
      />
      <CatFact />
    </MainPanel>
  );
}

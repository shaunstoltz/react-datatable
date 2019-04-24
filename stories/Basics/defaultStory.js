import React from "react";
import { Datatable } from "../../src/index";
import { storyOptionsSample } from "../../data/samples";

const defaultStory = () => {
  return <Datatable options={storyOptionsSample} />;
};

export default defaultStory;

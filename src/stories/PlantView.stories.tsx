import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PlantView from "../app/components/PlantView";

export default {
  title: "Example/PlantView",
  component: PlantView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PlantView>;

const Template: ComponentStory<typeof PlantView> = (args) => <PlantView {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "mama1",
  waterTime: "50min",
  plantId: "6127d18ee0ef6b0019e0d8e8",

};

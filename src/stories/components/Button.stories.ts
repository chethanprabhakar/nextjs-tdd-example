import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },

    color: {
      control: {
        type: "select",
        options: ["red", "blue", "green", "yellow", "indigo", "purple", "pink"], // Add more or less depending on your Tailwind CSS configuration
      },
    },

    border: {
      control: {
        type: "boolean",
      },
    },
    borderColor: {
      control: {
        type: "select",
        options: ["red", "blue", "green", "yellow", "indigo", "purple", "pink"],
      },
    },
    borderRadius: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "full"],
      },
    },

    opacity: {
      control: {
        type: "select",
        options: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
      },
    },
    gradient: {
      control: {
        type: "select",
        options: [
          "linear-gradient(to right, #ff9966, #ff5e62)",
          "linear-gradient(to right, #00f260, #0575e6)",
          "linear-gradient(to right, #e1eec3, #f05053)",
          // add more gradients as needed
        ],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    opacity: "100", // default opacity
    gradient: undefined, // default gradient
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

// Button with border and transparent background
export const WithBorder: Story = {
  args: {
    primary: false,
    border: true,
    borderColor: "blue",
    color: "blue",
    label: "Button",
  },
};

// Text button
export const TextButton: Story = {
  args: {
    primary: false,
    color: "blue",
    label: "Button",
  },
};

// Button with slightly rounded corners
export const RoundedCorners: Story = {
  args: {
    primary: true,
    borderRadius: "md",
    label: "Button",
  },
};

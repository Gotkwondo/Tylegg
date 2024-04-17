import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/styles/css/reset.css";

const customViewports = {
  largepc: {
    name: "LargePc",
    styles: {
      width: "2500px",
      height: "963px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
    },
  },
};

export default preview;

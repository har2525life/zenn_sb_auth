import { Meta, StoryObj } from "@storybook/react";
import AuthPage from "./AuthPage";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Auth Page",
  component: AuthPage,
  decorators: [withRouter],
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

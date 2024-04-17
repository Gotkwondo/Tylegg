import React, { useEffect } from "react";
import { ComponentStory } from "@storybook/react";
import Agency from "components/Tyle/Box/Agency";
import { RecoilRoot, useRecoilState } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { tyleInfoSelector } from "recoil/tyleInfo";
import { MemoryRouter } from "react-router-dom";
import { tyleInfoMock } from "mocks/mockJson";

export default {
  title: "Agency",
  component: Agency,
};

const queryClient = new QueryClient();

const Component: ComponentStory<typeof Agency> = () => {
  const [, setTyleInfo] = useRecoilState(tyleInfoSelector);

  //msw는 아직 연동안함 단순하게 setState만 해둔상태
  useEffect(() => {
    setTyleInfo(tyleInfoMock);
  }, []);

  return <Agency></Agency>;
};

const Template: ComponentStory<typeof Agency> = (args: any) => {
  //
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <MemoryRouter>
          <div style={{ width: `${args.width}px` }}>
            <Component />
          </div>
        </MemoryRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export const Large_PC = Template.bind({});
Large_PC.args = {
  width: 2500,
};

Large_PC.parameters = {
  viewport: {
    defaultViewport: "largepc",
  },
};

export const PC = Template.bind({});
PC.args = {
  width: 1600,
};

export const Tablet = Template.bind({});
Tablet.args = {
  width: 1000,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const Mobile = Template.bind({});
Mobile.args = {
  width: 390,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone14",
  },
};

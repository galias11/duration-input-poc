import * as React from "react";
import { shallow } from "enzyme";

import App from "../App";

describe("App", () => {
  it("should render", () => {
    const wrapper = shallow(<App>test children</App>);
    expect(wrapper).toMatchSnapshot();
  });
});

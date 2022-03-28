import { Provider } from "react-redux";
import { store } from "../../Redux/store";

import "jest-styled-components";
import { mount } from "enzyme";

import SearchInput from "./index";

describe("SearchInput", () => {
  let wrapper;

  it("should render Input and start closed", () => {
    wrapper = mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    const input = wrapper.find("input");

    expect(!!input).toBe(true);
    expect(input.props()).toHaveProperty("open", false);
  });

  it("should open Input onClick and close after another one", () => {
    wrapper = mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );

    expect(wrapper.find("input").props()).toHaveProperty("open", false);
    wrapper.find("svg").first().simulate("click");
    expect(wrapper.find("input").props()).toHaveProperty("open", true);
    wrapper.find("svg").first().simulate("click");
    expect(wrapper.find("input").props()).toHaveProperty("open", false);
  });
  
  it("should set Redux value after typing", () => {
    wrapper = mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    
    const searchString = "React";
    
    wrapper.find("svg").first().simulate("click");
    wrapper.find("input").simulate("change", { target: { value: searchString } });
    
    expect(store.getState().app.search).toBe(searchString);
    expect(wrapper.find("input").props()).toHaveProperty("value", searchString);
  });
  
  it("should reset input value after close", () => {
    wrapper = mount(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    
    const searchString = "React";
    
    wrapper.find("svg").first().simulate("click");
    wrapper.find("input").simulate("change", { target: { value: searchString } });
    wrapper.find("svg").first().simulate("click");

    expect(store.getState().app.search).toBe("");
    expect(wrapper.find("input").props()).toHaveProperty("value", "");
  });
});

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";

import Certificates from "./index";

test("should render Title", () => {
  render(
    <Provider store={store}>
      <Certificates />
    </Provider>
  );

  const textElement = screen.queryByText('');
  expect(textElement).toBeInTheDocument();
});

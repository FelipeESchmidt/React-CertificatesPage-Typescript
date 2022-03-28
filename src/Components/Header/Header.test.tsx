import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";

import Header from "./index";
import { certificatesText } from "./index.constants";

test("should render Title", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const textElement = screen.queryByText(certificatesText);
  expect(textElement).toBeInTheDocument();
});

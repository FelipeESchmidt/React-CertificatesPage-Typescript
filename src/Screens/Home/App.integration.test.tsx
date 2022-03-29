import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../Redux/store";

import HomeScreen from "./index";

test("should render Title", () => {
  render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );

  const bodyElement = screen.queryByText(/Minhas/i);
  expect(bodyElement).toBeInTheDocument();
});

import { Provider } from 'react-redux';
import { store } from '../../Redux/store';

import 'jest-styled-components';
import { mount } from 'enzyme';

import Switch from './index';
import { ThemeModes } from '../../Theme/index.theme';

const darkMode: ThemeModes = 'dark';
const lightMode: ThemeModes = 'light';

describe('Switch', () => {
  let wrapper;

  it('should render Switch', () => {
    wrapper = mount(
      <Provider store={store}>
        <Switch />
      </Provider>,
    );

    const switchElement = wrapper.find('#switch-mode');

    expect(!!switchElement).toBe(true);
  });

  it('should set Redux value after clicking', () => {
    wrapper = mount(
      <Provider store={store}>
        <Switch />
      </Provider>,
    );

    expect(store.getState().app.mode).toBe(darkMode);
    wrapper.find('#switch-mode').first().simulate('click');
    expect(store.getState().app.mode).toBe(lightMode);
    wrapper.find('#switch-mode').first().simulate('click');
    expect(store.getState().app.mode).toBe(darkMode);
  });
});

import { mount } from '@vue/test-utils';
import GiphyDropdown from '../GiphyDropdown.vue';

/**
 * TODO There is a stub for tests, tests do not work because of wrong
 * settings. To set jest correctly and run tests.
 */
describe('States after input', () => {
  test('renders only input by default', () => {
    const wrapper = mount(GiphyDropdown);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('div.dropdown').exists()).toBe(false);
  });
});

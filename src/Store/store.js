import { createStore, createHook, createSubscriber } from 'react-sweet-state';
import { DARK } from '../Enums/themeEnums';

const Store = createStore({
  initialState: {
    theme: DARK,
    isLoading: false,
    isSideDrawerOpen: false,
  },
  actions: {
    openLoader: () => ({ setState }) => setState({ isLoading: true }),
    closeLoader: () => ({ setState }) => setState({ isLoading: false }),
    setTheme: (value) => ({ setState }) => setState({ theme: value }),
    setSidedrawer: () => ({ setState, getState }) => setState({ isSideDrawerOpen: !getState().isSideDrawerOpen }),
  }
});

const useStore = createHook(Store);


export const getUIStore = (state) => ({
  isLoading: state.isLoading,
  theme: state.theme,
  isSideDrawerOpen: state.isSideDrawerOpen,
});

export const useUIStore = createHook(Store, {
  selector: getUIStore,
});

export const UIStore = createSubscriber(Store, {
  selector: getUIStore,
  displayName: 'UISizing'
});

export default useStore;
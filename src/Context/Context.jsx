import { createContext } from 'react';

const Context = createContext({
  isDrop: false,
  modal: false,
  animateCart: false,
  contactCard: true,
  setContactCard: () => {},
  setModalVal: () => {},
  setIsDropVal: () => {},
  setAnimateCart: () => {},
});

export default Context;

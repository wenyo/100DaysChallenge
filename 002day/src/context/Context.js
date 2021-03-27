import  { createContext } from 'react';

const sNowYear = new Date().getFullYear();

const context = createContext({
    sNowYear,
});

export default context;
export const { Provider, Consumer } = context;

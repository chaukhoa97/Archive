import { createContext } from "react";

const NumberContext = createContext({ num: 0, fn: () => {} });

export default NumberContext;

import React from "react";

const initialState = { num: 0, fn: () => {} };
//* Ko cần initialState ở trong .createContext vẫn dc, thêm vào có tác dụng để IDE gợi ý
const numberContext = React.createContext<typeof initialState>(initialState);

export default numberContext;

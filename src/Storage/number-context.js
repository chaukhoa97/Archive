import React from 'react';

//* Ko cần object ở trong .createContext vẫn dc, thêm vào có tác dụng để IDE gợi ý
const numberContext = React.createContext({ num: 0, fn: () => {} });

export default numberContext;

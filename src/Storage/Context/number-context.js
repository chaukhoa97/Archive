//! Nên tách riêng context ra thành các file riêng để dễ quản lý

import React from 'react';

//* Ko cần object ở trong .createContext vẫn dc, thêm vào có tác dụng để IDE gợi ý
const stateContext = React.createContext({ num: 0, fn: () => {} });

export default stateContext;

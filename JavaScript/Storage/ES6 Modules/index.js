//! export default không cần dấu {}, và có thể tự đặt tên lại không cần "as"
import U, { printName as printNamebruh } from './user.js';

const khoa = new U('khoa');
printNamebruh(khoa);

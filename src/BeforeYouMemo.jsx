export default function App() {
  //* When the color changes, <ExpensiveTree /> will be re-rendered
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p>Hello, world!</p>
      <ExpensiveTree />
    </div>
  );
}

//1 Cách 1: Lifting <ExpensiveTree /> lên rồi truyền vào <ColorPicker /> bằng {children}
export default function App2() {
  return (
    <ColorPicker>
      <p>Hello, world!</p>
      <ExpensiveTree />
    </ColorPicker>
  );
}
function ColorPicker({ children }) {
  let [color, setColor] = useState("red");
  return (
    <div style={{ color }}>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      {children}
    </div>
  );
}


//1 Cách 2: Nếu <ExpensiveTree /> ko quan tâm đến `color` thì ta có thể tách ~ phần quan tâm đến `color` ra riêng 1 component - ở đây là <Form />
//! Ko dùng dc khi state phải dc viết ở component cha (eg. <App /> ở trên dùng `style` cho container div)
export default function App3() {
  return (
    <>
      <Form />
      <ExpensiveTree />
    </>
  );
}
function Form() {
  let [color, setColor] = useState('red');
  return (
    <>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <p style={{ color }}>Hello, world!</p> 
    </>
  );
}


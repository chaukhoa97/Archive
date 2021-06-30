//! BẮT BUỘC tên function phải là PascalCase đễ không lẫn với built-in component của HTML
//* Extension: Component nên dùng jsx, file thuần JavaSciprt thì nên dùng .js

//* State Hooks - có tác dụng changning what we see on screen
  // deleteButtonOn: The current state value, default is "false" in useState(false)
  // setDeleteButton: The function that lets you update it
  const [deleteButton, setDeleteButton] = useState(false) --> setDeleteButton(true)

App.jsx: import { Route, Switch } from "react-router-dom"; // Route tới Router bên trang index.js
index.jsx: import { BrowserRouter as Router } from "react-router-dom"; // Để Route hoạt động dc bên App.jsx

//? Có thể dùng State và onChange để đọc value với mỗi keystroke, nhưng ở đây chỉ cần value lúc submit form thôi nên dùng useRef

//* props = properties:
//* Trong component: props.image --> Khi call: <MeetupItem image=... />
//! Có thể viết "props" thành bất kỳ cái gì, nhưng nên giữ nguyên
//* class:{classMate: ...} --> props.class.classMate
import classes from "./MeetupItem.module.css";
function MeetupItem(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title}></img>
          </div>
          <section className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
          </section>
          <div className={classes.actions}>
            <button>To Favorites</button>
          </div>
        </Card>
      </li>
    );
  }
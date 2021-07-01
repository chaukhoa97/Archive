//* Là wrapper, bao quanh các component để style
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;

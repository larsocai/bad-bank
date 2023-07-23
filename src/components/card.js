import "../stylesheets/Card.css";

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : "text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div className="card-container">
      <div className={classes()} style={{ maxWidth: "35rem" }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.image && <h5 className="card-image">{props.image}</h5>}
          {props.title && <h5 className="card-title">{props.title}</h5>}
          {props.text && <p className="card-text">{props.text}</p>}
          {props.body}
          {props.status && <div id="createStatus">{props.status}</div>}
        </div>
      </div>
    </div>
  );
}

export default Card;

import { Link } from "react-router-dom";

export default function ({ ...props }) {
  return (
    <div class="card item">
      <div class="card-body">
        <Link to={`/edit?id=${props.id}`}>
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.desc}</h6>
        </Link>
        <a href={props.beat}>Beat</a>
      </div>
    </div>
  );
}

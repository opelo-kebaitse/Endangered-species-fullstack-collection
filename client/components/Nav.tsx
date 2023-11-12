import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="title-container">
      <Link to="/" className="title-link">
        <h1 className="header-title">Endangered Species Awareness Community</h1>
      </Link>
    </div>
  );
}

export default Nav;

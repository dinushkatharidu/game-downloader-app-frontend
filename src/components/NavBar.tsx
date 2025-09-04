function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          GameFlix
        </a>
        <div>
          <a className="btn btn-outline-light mx-2" href="#">
            Games
          </a>
          <a className="btn btn-outline-light mx-2" href="#">
            Subscriptions
          </a>
          <button className="btn btn-danger">Sign In</button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

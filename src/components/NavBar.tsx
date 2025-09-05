
interface NavbarProps {
  onSectionChange: (section: "home" | "games") => void;
}

const NavBar: React.FC<NavbarProps> = ({ onSectionChange }) => {
  return (
      <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => onSectionChange("home")}>
          GameFlix
        </a>
        <div>
          <button
            className="btn btn-outline-light mx-2"
            onClick={() => onSectionChange("games")}
          >
            Games
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

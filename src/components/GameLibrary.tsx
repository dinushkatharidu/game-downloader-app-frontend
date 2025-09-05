import codmw2 from "../assets/images/codmw2.jpg";
import codmw3 from "../assets/images/codmw3g.jpg";
import horizen5 from "../assets/images/horizen5.jpg";
import trde from "../assets/images/tombrider.jpg";
import indiyana from "../assets/images/indiyanajhones.jpg";
import sotomb from "../assets/images/shadowtom.jpg";
import helo from "../assets/images/halo.jpg";
import chorus from "../assets/images/Chorus.jpg";
import revil2 from "../assets/images/RESIDENTevil.jpg";

function GameLibrary() {
  const games = [
    {
      name: "Call of Duty®: Modern Warfare® II",
      description:
        "Experience a thrilling military campaign and heart-pounding multiplayer battles.",
      thumbnail: codmw2,
    },
    {
      name: "Call of Duty®: Modern Warfare® III",
      description:
        "Dive into intense action with a gripping story and groundbreaking multiplayer modes.",
      thumbnail: codmw3,
    },
    {
      name: "Forza Horizon 5",
      description:
        "Race through the vibrant open-world landscapes of Mexico in the ultimate driving adventure.",
      thumbnail: horizen5,
    },
    {
      name: "Tomb Raider: Definitive Edition",
      description:
        "Join Lara Croft on her epic journey of survival and exploration in this award-winning adventure.",
      thumbnail: trde,
    },
    {
      name: "Indiana Jones and the Great Circle™",
      description:
        "Embark on a daring adventure with Indiana Jones as you uncover ancient mysteries.",
      thumbnail: indiyana,
    },
    {
      name: "Shadow of the Tomb Raider",
      description:
        "Explore lush jungles, solve ancient puzzles, and uncover the secrets of the Mayan apocalypse.",
      thumbnail: sotomb,
    },
    {
      name: "Halo Infinite",
      description:
        "Step into the boots of the Master Chief and fight to save humanity in this legendary sci-fi saga.",
      thumbnail: helo,
    },
    {
      name: "Chorus",
      description:
        "Pilot your starfighter in a gripping story of redemption and rebellion in this space combat game.",
      thumbnail: chorus,
    },
    {
      name: "RESIDENT EVIL 2",
      description:
        "Survive the nightmare of Raccoon City in this masterful remake of the survival horror classic.",
      thumbnail: revil2,
    },
  ];

    return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Game Library</h2>
      <div className="row">
        {games.map((game, index) => (
          <div className="col-md-4 col-lg-3 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={game.thumbnail}
                alt={game.name}
                className="card-img-top"
                style={{
                  height: "390px", 
                  objectFit: "cover", 
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{game.name}</h5>
                <p className="card-text text-muted">{game.description}</p>
                <button className="btn btn-danger mt-auto">
                  <i className="bi bi-download"></i> Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameLibrary;

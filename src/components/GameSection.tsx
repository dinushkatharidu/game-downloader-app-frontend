import cod7Img from "../assets/images/cod7.jpg";
import army2Img from "../assets/images/army2.jpg";
import army3Img from "../assets/images/all.jpg";

function GameSection() {
  const features = [
    {
      title: "Play Anywhere.",
      description: "Play on your PC, console, or mobile device seamlessly.",
      image: cod7Img,
    },
    {
      title: "Download for Offline Play.",
      description: "Save your games and play offline anytime, anywhere.",
      image: army2Img,
    },
    {
      title: "Exclusive Content.",
      description:
        "Get access to exclusive games available only to subscribers.",
      image: army3Img,
    },
  ];
  return (
    <div className="container my-5">
      {features.map((feature, index) => (
        <div className="row align-items-center my-4" key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="col-md-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
              <div className="col-md-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="img-fluid"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default GameSection;

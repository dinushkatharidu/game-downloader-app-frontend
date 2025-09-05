import mainImg2 from "../assets/images/mainImg02.jpg";

function BodySecton() {
  return (
    <div
      className="bg-dark text-white text-center py-5"
      style={{
        minHeight: "60vh",
        backgroundImage: `url(${mainImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <h1
          className="display-4"
          style={{
            textShadow:
              "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
          }}
        >
          Unlimited Games. Download and Play Anywhere.
        </h1>
        <p
          className="lead"
          style={{
            textShadow:
              "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
          }}
        >
          Get access to thousands of games with one subscription.
        </p>
        <button className="btn btn-danger px-4">Get Started</button>
      </div>
    </div>
  );
}

export default BodySecton;

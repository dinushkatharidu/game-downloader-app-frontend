function BodySecton() {
  return (
    <div
      className="bg-dark text-white text-center py-5"
      style={{
        minHeight: "60vh",
        backgroundImage: "url(https://via.placeholder.com/1600x900)", // Replace with a game-related image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <h1 className="display-4">
          Unlimited Games. Download and Play Anywhere.
        </h1>
        <p className="lead">
          Get access to thousands of games with one subscription.
        </p>
        <button className="btn btn-danger px-4">Get Started</button>
      </div>
    </div>
  );
}

export default BodySecton;

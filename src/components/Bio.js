import profilePic from "../assets/images/picture.jpg";

function Bio() {
  return (
    <>
      <div className="container-fluid margin">
        <img
          src={profilePic}
          className="image-fluid"
          alt="Heather wearing a white top and blue pants."
        ></img>

        <h2 className="margin subhead text-center">About Me</h2>
        <div className="card cardcolor card-content biocard h-100 p-4">
          <p className="text-center">
            Through Northwestern University's developer program, I have become
            well versed in HTML, CSS, and Javascript; with an emphasis on
            test-driven development, debugging, object oriented programming, API
            routing, database theory, AWS cloud environment, and working in
            teams to develop full stack applications. I have a particular
            interest in data analytics and working with relational databases,
            because they require complex problem solving skills and are logic
            based.
          </p>
          <p className="text-center">
            When I'm not programming, you can find me training for my next
            marathon or spending time with my dog, Olive.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;

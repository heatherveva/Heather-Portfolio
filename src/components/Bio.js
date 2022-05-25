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
            As a former high school English teacher and current developer
            advocate, I've always had a passion for education and providing
            people with the information they need to improve their lives and
            businesses.
          </p>
          <p className="text-center">
            I stumbled into to tech serendipitously over a year ago and haven't
            looked back. I love the continuous learning required to stay current
            on new technologies and the latest trends in cloud infastructure. I
            have a particular interest in technical writing to help developers
            utilize software to its fullest potential.
          </p>
          <p className="text-center">
            When I'm not working in tech, you can find me training for my next
            marathon or spending time with my dog, Olive.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;

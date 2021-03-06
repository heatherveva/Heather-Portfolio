import React from "react";
import bookbuddy from "../assets/images/bookbuddy.png";
import recipeme from "../assets/images/recipeme.png";
import techtalk from "../assets/images/techtalk.png";
import alphabet from "../assets/images/alphabetgame.png";
import regex from "../assets/images/regex.png";

function Project() {
  return (
    <>
      <h2 className="margin subhead text-center ">Projects</h2>
      <div className="row justify-content-md-center margin">
        <div className="col col-md-3 marginlandr">
          <div className="card border border-3 border-white h-100">
            <a href="https://highfivers.github.io/project/" target="_blank">
              <img
                src={bookbuddy}
                className="card-img-top"
                alt="The background is white and there is a yellow header with the title of the application on it. It also contains examples of search results to display the book result cards."
              ></img>
            </a>
            <div className="card-body card-content bgcolor">
              <h5 className="card-title text-center">Book Buddy</h5>
              <p className="card-text text-center">
                An app to help you find your next favorite book.
              </p>
            </div>
            <div className="card-body bgcolor text-center">
              <a
                href="https://github.com/highfivers/project.git"
                target="_blank"
                className="card-link linkcolor"
              >
                GitHub
              </a>
              <a
                href="https://highfivers.github.io/project/"
                target="_blank"
                className="card-link linkcolor"
              >
                Book Buddy
              </a>
            </div>
          </div>
        </div>

        <div className="col col-md-3 marginlandr">
          <div className="card border border-3 border-white h-100">
            <a href="https://project-2-jhmm.herokuapp.com/" target="_blank">
              <img
                src={recipeme}
                className="card-img-top"
                alt="This is a recipe builder application. The background is light pink and there are options to select ingredients."
              ></img>
            </a>
            <div className="card-body card-content bgcolor">
              <h5 className="card-title text-center">RecipeMe</h5>
              <p className="card-text text-center">
                An app for home cooks who are short on ideas.
              </p>
            </div>
            <div className="card-body bgcolor text-center">
              <a
                href="https://github.com/handibar/project2.git"
                target="_blank"
                className="card-content card-link linkcolor"
              >
                GitHub
              </a>
              <a
                href="https://project-2-jhmm.herokuapp.com/"
                target="_blank"
                className="card-link linkcolor"
              >
                Heroku
              </a>
            </div>
          </div>
        </div>

        <div className="col col-md-3 marginlandr">
          <div className="card border border-3 border-white h-100">
            <a
              href="https://github.com/heatherveva/RegEx-Tutorial/blob/main/regexmatchurl.md"
              target="_blank"
            >
              <img
                src={regex}
                className="card-img-top"
                alt="This is a recipe builder application. The background is light pink and there are options to select ingredients."
              ></img>
            </a>
            <div className="card-body card-content bgcolor">
              <h5 className="card-title text-center">RegEx Tutorial</h5>
              <p className="card-text text-center">
                Breaking down the Javascript regular expression to match a URL.
              </p>
            </div>
            <div className="card-body bgcolor text-center">
              <a
                href="https://github.com/heatherveva/RegEx-Tutorial/blob/main/regexmatchurl.md"
                target="_blank"
                className="card-content card-link linkcolor"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col col-md-3 margin marginlandr">
          <div className="card border border-3 border-white h-100">
            <a
              href="https://alphabet-game-project.herokuapp.com/"
              target="_blank"
            >
              <img
                src={alphabet}
                className="card-img-top"
                alt="This is a recipe builder application. The background is light pink and there are options to select ingredients."
              ></img>
            </a>
            <div className="card-body card-content bgcolor">
              <h5 className="card-title text-center">Letter Scramble</h5>
              <p className="card-text text-center">
                An app to help children practice their Enlgish spelling from
                home.
              </p>
            </div>
            <div className="card-body bgcolor text-center">
              <a
                href="https://github.com/alphabetgame/projectthree"
                target="_blank"
                className="card-content card-link linkcolor"
              >
                GitHub
              </a>
              <a
                href="https://alphabet-game-project.herokuapp.com/"
                target="_blank"
                className="card-content card-link linkcolor"
              >
                Heroku
              </a>
            </div>
          </div>
        </div>

        <div className="col col-md-3 margin marginlandr">
          <div className="card border border-3 border-white h-100">
            <a
              href="https://techbloghomeworkfourteen.herokuapp.com/"
              target="_blank"
            >
              <img
                src={techtalk}
                className="card-img-top"
                alt="This is social media platform where people can post things about tech and comment on other's posts."
              ></img>
            </a>
            <div className="card-body card-content bgcolor">
              <h5 className=" card-title text-center">Tech Talk</h5>
              <p className="card-text text-center">
                An app for people who love tech to connect.
              </p>
            </div>
            <div className="card-body bgcolor text-center">
              <a
                href="https://github.com/heatherveva/hw14_techblog.git"
                target="_blank"
                className="card-link linkcolor"
              >
                GitHub
              </a>
              <a
                href="https://techbloghomeworkfourteen.herokuapp.com/"
                target="_blank"
                className="card-link linkcolor"
              >
                Heroku
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

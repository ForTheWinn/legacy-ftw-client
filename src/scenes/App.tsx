import React from "react";
import Header from "../components/header";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <section className="hero-container has-overlay-image">
        <div className="hero is-success is-medium is-relative">
          <div className="hero-body">
            <div className="container is-small has-text-centered">
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <h1 className="title is-spaced">
                    The Future of Blockchain Lottery
                  </h1>
                  <h2 className="subtitle">
                    We create purely decentralized blockchain platforms that
                    lets people operate and maintain over their earnings. It
                    automates our platforms and cuts maintaining costs
                  </h2>
                  <figure className="image">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/global.png`}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-white is-medium">
        <div className="container is-small has-text-centered">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-spaced">How We Decentralize</h1>
              <h2 className="subtitle mb-6">
                Our smart contracts allow people maintain the games over their
                earnings.
              </h2>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <span className="icon is-xlarge">
                <img src={process.env.PUBLIC_URL + "/assets/images/draw.svg"} />
              </span>
              <br />
              <br />
              <h5 className="title is-5 is-spaced">Winning numbers by users</h5>
              <p className="subtitle is-6">
                Users trigger the blockchain to draw winning numbers when the
                current game is up to draw. The caster will be rewarded
                depending on the system fee percentage from ticket sales.
              </p>
            </div>
            <div className="column">
              <span className="icon is-xlarge">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/balls.svg"}
                />
              </span>
              <br />
              <br />
              <h5 className="title is-5 is-spaced">Matching tickets</h5>
              <p className="subtitle is-6">
                Users trigger the smart contract to start matching tickets with
                the new winning number. Each trigger verifies one ticket and
                will earn some percentage of a ticket price depending on the fee
                structure.
              </p>
            </div>
            <div className="column">
              <span className="icon is-xlarge">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/claim.svg"}
                />
              </span>
              <br />
              <br />
              <h5 className="title is-5 is-spaced">Claim prize</h5>
              <p className="subtitle is-6">
                Either winners or verifiers claim the winning ticket. The
                blockchain will send the prize and reward to the winner and the
                verifiers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="section has-background-light is-medium">
        <div className="container">
          <div className="has-text-centered">
            <h1 className="title mb-6">Projects</h1>
            <div className="columns">
              <div className="column">
                <div className="box">
                  <h5 className="title is-5">FTX Token</h5>
                  <p>
                    FTX is a NEP-5-compliant contract asset issued by FTW which
                    can be transferred between smart contracts. This unique
                    feature is used for building decentralized smart contracts.
                  </p>
                  <p>Launched at 10/26/2018</p>
                  <br />
                  <a
                    className="button is-small is-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://neotracker.io/asset/aac66f9779ca67d819d05492805d251dab02fc7b"
                  >
                    Token Info
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <h5 className="title is-5">Lotto</h5>
                  <p>
                    The first purely decentralized blockchain lottery on
                    NEO(2.0) blockchain. It has been running without any
                    problems since 2/3/2019.
                  </p>
                  <br />
                  <a
                    className="button is-small is-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://forthewinn.github.io/ftw-lotto"
                  >
                    Play
                  </a>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <h5 className="title is-5">Lotto Platform</h5>
                  <p>
                    Our lotto platform allows businesses to create 100%
                    automated custom lotteries without any coding skills. We
                    will deploy the smart contract in the new NEO3 blockchain.
                  </p>
                  <br />
                  <a
                    className="button is-small is-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://next.ftwcoin.io"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-white is-medium">
        <div className="container is-small has-text-centered">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-spaced">Why blockchain lottery</h1>
              <p className={"subtitle mb-6"}>
                Using features of blockchain, our platform removes the
                limitations of traditional gambling and offers a new kind of
                trust and quality.
              </p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <span className="icon is-xlarge">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/secure.svg"}
                />
              </span>
              <br />
              <br />
              <h5 className="title is-5 is-spaced">Secure</h5>
              <p className="subtitle is-6">
                All transactions are handled inside smart contracts.
              </p>
            </div>
            <div className="column">
              <span className="icon is-xlarge">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/blockchain.svg"}
                />
              </span>
              <br />
              <br />
              <h5 className="title is-5 is-spaced">Transparency</h5>
              <p className="subtitle is-6">
                All winning numbers are generated randomly in the blockchain and
                all transactions are public from entries to payouts.
              </p>
            </div>
            <div className="column">
              <span className="icon is-xlarge">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/preferences.svg"
                  }
                />
              </span>
              <br />
              <br />
              <h5 className="title is-5 is-spaced">Costless</h5>
              <p className="subtitle is-6">
                FTW ecosystem and fully decentralized smart contracts automate
                the platform which cuts maintaining costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-light is-medium">
        <div className="container is-small has-text-centered">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-spaced">Partners</h1>
              <p className={"subtitle"}>
                We are on NEO blockchain. Smart economy and great partners will
                redefine player experience.
              </p>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <figure
                      className="image is-128x128 is-flex"
                      style={{ alignItems: " center" }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/logo/neo_color_dark.png`}
                      />
                    </figure>
                  </div>
                  <div className="level-item">
                    <figure
                      className="image is-128x128 is-flex"
                      style={{
                        alignItems: " center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ width: "64px" }}
                        src={`${process.env.PUBLIC_URL}/assets/logo/o3.png`}
                      />
                    </figure>
                  </div>
                  <div className="level-item">
                    <figure
                      className="image is-128x128 is-flex"
                      style={{ alignItems: " center" }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/logo/neoline.png`}
                      />
                    </figure>
                  </div>
                  <div className="level-item">
                    <figure
                      className="image is-128x128 is-flex"
                      style={{
                        alignItems: " center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ width: "64px" }}
                        src={`${process.env.PUBLIC_URL}/assets/logo/nos.svg`}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="section has-background-white"
        style={{
          position: "relative",
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/footer-bg.png)`,
          backgroundPosition: "center 50px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container is-small">
          <div className="columns">
            <div className="column is-narrow" style={{ width: "300px" }}>
              <img
                alt="FTW logo"
                src={`${process.env.PUBLIC_URL}/assets/logo/ftw_dark.png`}
                style={{ maxHeight: "1.75rem" }}
                className="mb-3"
              />
              <div className="content is-small">
                <strong>The Future of Blockchain Lottery</strong>
                <br />
                FTW Corp LLC, Costa Rica
                <br />
                <a className="has-text-dark" href="mailto:info@ftwcoin.io">
                  Info@ftwcoin.io
                </a>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column">
                  <h6 className="title is-6">Projects</h6>
                  <ul>
                    <li>
                      <a
                        className="has-text-dark"
                        href={
                          "https://neotracker.io/asset/aac66f9779ca67d819d05492805d251dab02fc7b"
                        }
                      >
                        FTX Token
                      </a>
                    </li>
                    <li>
                      <a
                        className="has-text-dark"
                        href={"https://forthewinn.github.io/ftw-lotto"}
                      >
                        Lotto
                      </a>
                    </li>
                    <li>
                      <a
                        className="has-text-dark"
                        href={"https://next.ftwcoin.io"}
                      >
                        Lotto Platform
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h6 className="title is-6">Community</h6>
                  <ul>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className="has-text-dark"
                        href="https://medium.com/ftw-blog"
                      >
                        Medium
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className="has-text-dark"
                        href="https://www.reddit.com/r/ftwcoin"
                      >
                        Reddit
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className="has-text-dark"
                        href="https://t.me/ftwcoin"
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className="has-text-dark"
                        href="https://github.com/ForTheWinn"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        className="has-text-dark"
                        href="https://twitter.com/forthewincoin"
                      >
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h6 className="title is-6">Exchanges</h6>
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        href="https://switcheo.exchange/markets/FTWX_NEO"
                        className="has-text-dark"
                      >
                        Switcheo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*<div className="has-text-centered">Built on NEO blockchain</div>*/}
        </div>
      </footer>
    </div>
  );
}

export default App;

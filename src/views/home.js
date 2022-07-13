import React from "react";

import { Helmet } from "react-helmet";

import SpeakerCard from "../components/speaker-card";
import NumbersCard from "../components/numbers-card";
import EventCard from "../components/event-card";
import Slide from "../components/slide";
import Footer from "../components/footer";
import "./home.css";
import { Categories } from "../categories/Categories";

const Home = (props) => {
  return (
    <div className="home-container ">
      <Helmet>
        <title>Join to Joy</title>
        <meta property="og:title" content="Marketing event page" />
      </Helmet>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                <span>
                  TAKE ACTION.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span>Plan Your Event with</span> <br></br>
                <span className="home-text02">JOIN TO JOY</span>
              </h1>
              <span className="home-text05">
                <span>
                  where we style birthdays , graduation, shower parties and
                  chocolate designs.
                </span>
                <br></br>
              </span>
              <div className="home-btns-container">
                <button className="home-primary button-primary button-lg button">
                  register now
                </button>
                <button className="button button-outline button-lg-border">
                  learn more
                </button>
              </div>
            </div>
            <div className="home-video-container">
              <div className="home-video"> </div>
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>

        <div className="home-previous-events section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text49 heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text51">
                Take a tour of our previous conferences
              </span>
            </div>
          </div>

          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name4"></Slide>
            <Slide
              // heading="Slide #2"
              rootClassName="slide-root-class-name1"
            ></Slide>
            <Slide
              // heading="Slide #3"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              // heading="Slide #4"
              rootClassName="slide-root-class-name3"
            ></Slide>
            <Slide
              // heading="Slide #5"
              rootClassName="slide-root-class-name2"
            ></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* <div className="home-sponsors section-container">
          <div className="home-max-width1 max-content-container">
            <span className="home-text08">
              <span></span>
              <span>proudly sponsored by</span>
            </span>
            <div className="home-container1">
              <img
                alt="image"
                src="/playground_assets/group%207-1200w.png"
                className="home-image"
              />
              <img
                alt="image"
                src="/playground_assets/group%208-1200w.png"
                className="home-image1"
              />
              <img
                alt="image"
                src="/playground_assets/group%209-1200w.png"
                className="home-image2"
              />
              <img
                alt="image"
                src="/playground_assets/group%2010-1200w.png"
                className="home-image3"
              />
              <img
                alt="image"
                src="/playground_assets/group%2011-1200w.png"
                className="home-image4"
              />
              <img
                alt="image"
                src="/playground_assets/group%2012-1200w.png"
                className="home-image5"
              />
            </div>
          </div>
        </div> */}
        <div className="home-speakers section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container">
              <span className="home-text11">Most Popular Events Reserved</span>
              <h1 className="home-text12 heading2">
                <span>Events Categories</span>
                <span className="home-text14"></span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <Categories />
            </div>
          </div>
        </div>
        {/* <div className="home-numbers-banner section-container">
          <div className="home-container2 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text15">
                Our 12-year conference history in sharing digital marketing
                insights
              </span>
              <h1 className="home-text16 heading2">
                <span>market1 SUMMIT IN NUMBERS</span>
              </h1>
            </div>
            <div className="home-numbers-container">
              <NumbersCard></NumbersCard>
              <NumbersCard
                text="years"
                number="12"
                image_src="/playground_assets/interface%20time%20reset-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="total events"
                number="64"
                image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="companies"
                number="15,070"
                image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="cities"
                number="14"
                image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="speakers"
                number="1,071"
                image_src="/playground_assets/computer%20voice%20mail-200h.png"
              ></NumbersCard>
            </div>
          </div>
        </div> */}
        {/* / */}
        <div className="home-agenda section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-heading-container2">
              <h1 className="home-text31 heading2">
                <span>Comments from our clients</span>
              </h1>
              <span className="home-text33">
                more announcements are coming soon
              </span>
            </div>
            <div className="home-events-container">
              <div className="home-column">
                <div className="home-column-header">
                  <span className="home-text34">
                    <span>tuesday - 7.03</span>
                  </span>
                  <div className="home-line"></div>
                </div>
                <EventCard></EventCard>
                <EventCard
                  title="tik tok or what?"
                  image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="sales + marketing duo"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="best practices for more\ndata-driven results"
                  image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
              </div>
              <div className="home-column1">
                <div className="home-column-header1">
                  <span className="home-text36">
                    <span>wednesday - 8.03</span>
                  </span>
                  <div className="home-line1"></div>
                </div>
                <EventCard
                  title="digital marketing strategies"
                  image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="a new era of social media"
                  image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="growing a remote team"
                  image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
                <EventCard
                  title="beyond the metaverse"
                  image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></EventCard>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Home;

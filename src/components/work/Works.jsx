import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/news.jpg",
      title: "Web Design",
      desc:
      `This is news website you will get news with different filter
      like technology news, Business news, Health news, Sports news
      And many other with the help of newsapi.org and technology is ReactJS`,
      img:
        "./assets/news.jpg",
      link:"https://github.com/the-Shashi7?tab=repositories",
    },
    {
      id: "2",
      icon: "./assets/dice.jpg",
      title: "Website",
      desc:
        `This is a two-player game, dice is rolled and you got
        the point in your account and if you get 1 you are out and 2nd player
        will roll the dice. create with the help of Html5, CSS and JavaScript.`,
      img:
        "./assets/dice.jpg",
      link:"https://the-shashi7.github.io/dic_game2player/",
    },
    {
      id: "3",
      icon: "./assets/calculator.jpg",
      title: "Application",
      desc:
        `This is calculator which calculate your normal sum.
        create with the help of Html5, CSS and JavaScript.`,
      img:
        "./assets/calculator.jpg",
      link:"https://the-shashi7.github.io/Calculator_html5_css_js/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.link} target="_blank" >Projects</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
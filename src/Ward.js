import React from "react"; 
import "./Ward.css";

export default function Ward(){
    return (
    <div className="Weather">
      <h1 className="title">Welcome to the Ward Family Weather Page!</h1>
      <div className="favourites">
        <div className="row">
          <div className="col-3" id="grimsby">
            <button type="button" className="btn btn-light1">
              Grimsby
            </button>
          </div>
          <div className="col-3" id="pittsburgh">
            <button type="button" className="btn btn-light2">
              Pittsburgh
            </button>
          </div>
          <div className="col-3" id="bristol">
            <button type="button" className="btn btn-light3">
              Bristol
            </button>
          </div>
          <div className="col-3" id="london">
            <button type="button" className="btn btn-light4">
              London
            </button>
          </div>
        </div>
      </div>
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              id="citySearch"
              placeholder="Type a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              id="submitButton"
              className="form-control btn btn-primary"
            />
          </div>
        </div>
      </form>
      <h1 id="city"></h1>
      <ul>
        <li>
          Current UK Time: 10am
        </li>
        <li>
          Current Local Condition: Rainy
        </li>
      </ul>
      <div className="row align-items-start">
        <div className="col-6">
          <img
            src=" http://openweathermap.org/img/wn/10d@2x.png"
            alt="sunshine"
            id="icon"
            className="weather-icon"
          />
          <span className="temperature" id="degrees">
            20
          </span>
          <span className="units">
            °C |
            <a href="#" id="farenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="col-6">
          <ul className="details">
            <li>
              'Real Feel': <span id="realFeel">0</span>°C
            </li>
            <li>
              Humidity: <span id="humidity">77</span>%
            </li>
            <li>
              Wind: <span id="wind">8</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
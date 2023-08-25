import React from "react";
import { Link } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Diet from "../styles/Pictures/diet.png";
import Mobility from "../styles/Pictures/mobility.png";
import Energy from "../styles/Pictures/energy.png";
import Housing from "../styles/Pictures/housing.png";
import Biodiversity from "../styles/Pictures/biodiversity.png";
import Waste from "../styles/Pictures/waste.png";
import Lifestyle from "../styles/Pictures/lifestyle.png";
import Finance from "../styles/Pictures/finance.png";
import GoBeyond from "../styles/Pictures/gobeyond.png";

function Modules() {
  return (
    <div className="MainDivBackground ViewDiv">
      <div className="ModulesCard">
        <div className="ModulesCardContent">
          <div className="ModulesCardNames">
            <div className="DietModule container DietImage">
              <div>
                <img src={Diet} alt="DietModule" height={100}></img>
              </div>
              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>
              <div>DIET</div>
            </div>
            <div className="MobilityModule container MobilityImage">
              <div>
                <img src={Mobility} alt="MobilityModule " height={100}></img>
              </div>

              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>
              <div>MOBILITY</div>
            </div>
            <Link
              className="EnergyModule container EnergyImage"
              style={{ textDecoration: "none", color: "white" }}
              to="/Q1Energy"
            >
              <div>
                <img src={Energy} alt="EnergyModule" height={100}></img>
              </div>{" "}
              <div>ENERGY</div>
            </Link>
          </div>
          <div className="ModulesCardNames">
            {/* <div className="HousingModule container HousingImage">
              <div>
                <img src={Housing} alt="HousingModule" height={100}></img>
              </div>{" "}
              <div>HOUSING</div>
            </div> */}
            <Link
              className="HousingModule container HousingImage"
              style={{ textDecoration: "none", color: "white" }}
              to="/Q1"
            >
              <div>
                <img src={Housing} alt="HousingModule" height={100}></img>
              </div>{" "}
              <div>HOUSING</div>
            </Link>
            <div className="BiodiversityModule container BiodiversityImage">
              {" "}
              <div>
                <img
                  src={Biodiversity}
                  alt="BiodiversityModule"
                  height={100}
                ></img>{" "}
              </div>
              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>
              <div>
                BIODIVERSITY <br></br> AND NATURE
              </div>
            </div>
            <div className="WasteModule container WasteImage">
              {" "}
              <div>
                <img src={Waste} alt="WasteModule" height={100}></img>
              </div>
              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>
              <div>WASTE</div>
            </div>
          </div>
          <div className="ModulesCardNames">
            <div className="LifestyleModule container LifestyleImage">
              {" "}
              <div>
                <img src={Lifestyle} alt="LifestyleModule" height={100}></img>
              </div>
              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>{" "}
              <div>LIFESTYLE</div>
            </div>
            <div className="FinanceModule container FinanceImage">
              {" "}
              <div>
                <img src={Finance} alt="FinanceModule" height={100}></img>
              </div>
              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>
              <div>FINANCE</div>
            </div>
            <div className="GoBeyongModule container GoBeyondImage">
              {" "}
              <div>
                <img src={GoBeyond} alt="GoBeyondModule" height={100}></img>
              </div>
              <div className="middle">
                <div className="text">COMING SOON..</div>
              </div>
              <div>GO BEYOND</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ChangeClubsLogo">
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default Modules;

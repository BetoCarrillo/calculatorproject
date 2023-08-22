import React from "react";
import { Link } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Diet from "../styles/diet.png";
import Mobility from "../styles/mobility.png";
import Energy from "../styles/energy.png";
import Housing from "../styles/housing.png";
import Biodiversity from "../styles/biodiversity.png";
import Waste from "../styles/waste.png";
import Lifestyle from "../styles/lifestyle.png";
import Finance from "../styles/finance.png";
import GoBeyond from "../styles/gobeyond.png";

function Modules() {
  return (
    <div className="divbackground ViewDiv">
      <div className="ModulesCard">
        <div className="ModulesCardContent">
          <div className="ModulesCardNames">
            <div className="DietModule container DietImage">
              <div>
                <img src={Diet} alt="DietModule" height={100}></img>
              </div>
              <div class="middle">
                <div class="text">COMING SOON..</div>
              </div>
              <div>DIET</div>
            </div>
            <div className="MobilityModule container MobilityImage">
              <div>
                <img src={Mobility} alt="MobilityModule " height={100}></img>
              </div>

              <div class="middle">
                <div class="text">COMING SOON..</div>
              </div>
              <div>MOBILITY</div>
            </div>
            <div className="EnergyModule container EnergyImage">
              <div>
                <img src={Energy} alt="EnergyModule" height={100}></img>
              </div>
              <div class="middle">
                <div class="text">COMING SOON..</div>
              </div>
              <div>ENERGY</div>
            </div>
          </div>
          <div className="ModulesCardNames">
            <div className="HousingModule container HousingImage" to="/Q1">
              <div>
                <img src={Housing} alt="HousingModule" height={100}></img>
              </div>{" "}
              <div>HOUSING</div>
            </div>
            {/* <Link className="HousingModule container HousingImage" to="/Q1">
              <div>
                <img src={Housing} alt="HousingModule" height={100}></img>
              </div>{" "}
              <div>HOUSING</div>
            </Link> */}
            <div className="BiodiversityModule container BiodiversityImage">
              {" "}
              <div>
                <img
                  src={Biodiversity}
                  alt="BiodiversityModule"
                  height={100}
                ></img>{" "}
              </div>
              <div class="middle">
                <div class="text">COMING SOON..</div>
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
              <div class="middle">
                <div class="text">COMING SOON..</div>
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
              <div class="middle">
                <div class="text">COMING SOON..</div>
              </div>{" "}
              <div>LIFESTYLE</div>
            </div>
            <div className="FinanceModule container FinanceImage">
              {" "}
              <div>
                <img src={Finance} alt="FinanceModule" height={100}></img>
              </div>
              <div class="middle">
                <div class="text">COMING SOON..</div>
              </div>
              <div>FINANCE</div>
            </div>
            <div className="GoBeyongModule container GoBeyondImage">
              {" "}
              <div>
                <img src={GoBeyond} alt="GoBeyondModule" height={100}></img>
              </div>
              <div class="middle">
                <div class="text">COMING SOON..</div>
              </div>
              <div>GO BEYOND</div>
            </div>
          </div>
        </div>
      </div>
      <div>
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

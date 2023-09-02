import React, { useContext, useEffect, useState } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec5Energy() {
  const redirectPrev = useNavigate();
  const handlePrev = () => {
    redirectPrev(-1);
  };

  const [fullLoads, setFullLoads] = useState(false);
  const [ecoCycle, setEcoCycle] = useState(false);
  const [dirtyClothes, setDirtyClothes] = useState(false);
  const [coldWater, setColdWater] = useState(false);
  const [airDry, setAirDry] = useState(false);
  const [coolerHeat, setCoolerHeat] = useState(false);
  const [efficiency, setEfficiency] = useState(false);
  const [multipleLoads, setMultipleLoads] = useState(false);
  const [dryTowel, setDryTowel] = useState(false);
  const [peakHours, setPeakHours] = useState(false);

  const showFullLoads = (event) => {
    setFullLoads(!fullLoads);
  };

  const showEcoCycle = (event) => {
    setEcoCycle(!ecoCycle);
  };
  const showDirtyClothes = (event) => {
    setDirtyClothes(!dirtyClothes);
  };
  const showColdWater = (event) => {
    setColdWater(!coldWater);
  };
  const showAirDry = (event) => {
    setAirDry(!airDry);
  };
  const showCoolerHeat = (event) => {
    setCoolerHeat(!coolerHeat);
  };
  const showEfficiency = (event) => {
    setEfficiency(!efficiency);
  };
  const showMultipleLoads = (event) => {
    setMultipleLoads(!multipleLoads);
  };
  const showDryTowel = (event) => {
    setDryTowel(!dryTowel);
  };
  const showPeakHours = (event) => {
    setPeakHours(!peakHours);
  };

  const handleChange = (event) => {
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCardFullReco">
        <div className="EnergyCardContentFullReco">
          <div className="EnergyCardTitleFullReco">Do your laundry wisely</div>
          <div className="EnergyCardtextFullReco">
            The laundry room can be a site of massive savings, both money-wise
            and energy-wise. Washing machines and dryers can use a lot of water
            and electricity, but these small tips can make a big difference.
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showFullLoads}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#a12173" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Wash full loads of laundry
                </div>{" "}
                {fullLoads ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {fullLoads ? (
                <div className="ColorOptionText">
                  Same loads and cycles use the same amount of electricity and
                  water, so it’s more efficient to wait to do laundry until you
                  have a full load.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showEcoCycle}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#ee4347" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Use energy saving or the economy wash cycle
                </div>{" "}
                {ecoCycle ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {ecoCycle ? (
                <div className="ColorOptionText">
                  Most machines have an energy saving or economy cycle you can
                  choose from. This will help you use less water and save
                  energy.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showDirtyClothes}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#f79521" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Separate your clothes depending on the dirtiness
                </div>{" "}
                {dirtyClothes ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {dirtyClothes ? (
                <div className="ColorOptionText">
                  By separating the clothes you can choose the correct cycle for
                  each and avoid using unnecessary water or energy.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showColdWater}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#98cb63" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Wash your clothes on cold water cycles
                </div>{" "}
                {coldWater ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {coldWater ? (
                <div className="ColorOptionText">
                  Around 90% of the energy used to wash a load goes into heating
                  the water and it will help you prevent colour fading. If you
                  need to use hot water, at least use an environmentally
                  friendly detergent.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showAirDry}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#42a889" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">Air dry your clothes</div>{" "}
                {airDry ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {airDry ? (
                <div className="ColorOptionText">
                  If possible, take advantage of the sun, and dry your clothes
                  outside.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showCoolerHeat}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#7fc3eb" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  If you must use the dryer, set it to a cooler heat
                </div>{" "}
                {coolerHeat ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {coolerHeat ? (
                <div className="ColorOptionText">
                  A higher heat setting on your dryer uses more energy. Choose a
                  lower heat setting and a longer drying time to use less
                  energy. Make sure to use your dryer’s cool-down option, too.
                  It will finish up the load with the heat that is already in
                  the dryer, instead of producing more.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showEfficiency}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#4386c6" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Improve your dryer’s efficiency
                </div>{" "}
                {efficiency ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {efficiency ? (
                <div className="ColorOptionText">
                  by maintaining the dryer such as cleaning the lint filter
                  after every load, shortening the accordion-like hose on the
                  back, giving the clothes an extra spin in the washing machine
                  and not packing the dryer too full you will save a lot of
                  energy.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showMultipleLoads}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#095366" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Dry multiple loads consecutively
                </div>{" "}
                {multipleLoads ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {multipleLoads ? (
                <div className="ColorOptionText">
                  If you are drying more than one load of laundry, dry each load
                  immediately after the previous load ends to reduce the energy
                  required to reheat the dryer.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showDryTowel}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#a12173" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Throw a dry towel in the dryer
                </div>{" "}
                {dryTowel ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {dryTowel ? (
                <div className="ColorOptionText">
                  When drying heavy loads, adding a dry towel may help to dry
                  the clothes.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showPeakHours}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#ee4347" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Consider peak and off-peak hours
                </div>{" "}
                {peakHours ? (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_up
                  </div>
                ) : (
                  <div className="material-symbols-outlined arrowColorOption">
                    {" "}
                    keyboard_arrow_down
                  </div>
                )}
              </div>
              {peakHours ? (
                <div className="ColorOptionText">
                  If you are being charged extra for peak usage times, a simple
                  change to your routine can help. Peak hours refer to certain
                  times of the day where usage increases in your area increasing
                  the cost to run your dishwasher or wash your clothes. Using
                  your non-essential appliances during off-peak hours instead
                  can make a significant impact. <br></br> Contact your utility
                  company to find out if you are being charged extra for peak
                  hours.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>

          <div className="EnergyCardButtonsDivFullReco">
            <Link
              //   to=""
              className="EnergyFullRecoButtonCompleteDiv"
            >
              <div className="EnergyFullRecoCompleteButton">COMPLETE</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="BackFullRecoDiv">
        <Button to="/EnergyResults" className="EnergyFullRecoButtonBackDiv">
          <div className="EnergyFullRecoBackButton" onClick={handlePrev}>
            Back
          </div>
        </Button>
      </div>
      <div className="ChangeClubsLogo CClogo">
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

export default FullRec5Energy;

import React, { useContext, useEffect, useState } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec2Energy() {
  const redirectPrev = useNavigate();
  const handlePrev = () => {
    redirectPrev(-1);
  };
  const {
    inputQ3Energy,
    inputQ5Energy,
    inputQ7BEnergy,
    inputQ6Energy,
    inputQ7CEnergy,
  } = useContext(ResultsContext);
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);
  const [humanPower, setHumanPower] = useState(false);
  const [dataStore, setDataStore] = useState(false);
  const [musicStream, setMusicStream] = useState(false);
  const [cooking, setCooking] = useState(false);
  const [computer, setComputer] = useState(false);
  const [fridge, setFridge] = useState(false);
  const [fans, setFans] = useState(false);
  const [dishwasher, setDishwasher] = useState(false);

  const showHumanPower = (event) => {
    setHumanPower(!humanPower);
  };

  const showDataStore = (event) => {
    setDataStore(!dataStore);
  };
  const showMusicStream = (event) => {
    setMusicStream(!musicStream);
  };
  const showCooking = (event) => {
    setCooking(!cooking);
  };
  const showComputer = (event) => {
    setComputer(!computer);
  };
  const showFridge = (event) => {
    setFridge(!fridge);
  };
  const showFans = (event) => {
    setFans(!fans);
  };
  const showDishwasher = (event) => {
    setDishwasher(!dishwasher);
  };

  const handleChange = (event) => {
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCardFullReco">
        <div className="EnergyCardContentFullReco">
          <div className="EnergyCardTitleFullReco">Save Energy</div>
          <div className="EnergyCardtextFullReco">
            We can also have a positive impact on the climate and the
            environment by reducing our energy consumption. Along with reducing
            our reliance on non-renewable energy resources (like fossil fuels)
            and reducing the amount of greenhouse gas emissions, it also helps
            us to save money on energy bills. Conserving energy cuts down on
            expanding development and additional extraction of natural resources
            impacting natural areas.
          </div>
          <div className="EnergyCardtextFullReco">
            Some ways to save energy are:
          </div>
          <div className="EnergyCardColorOptions">
            <div
              onClick={showHumanPower}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#a12173" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">Use human power</div>{" "}
                {humanPower ? (
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
              {humanPower ? (
                <div className="ColorOptionText">
                  Using human power instead of a device to do the same task or
                  job will help conserve energy. This can include cutting food
                  by hand and not a food processor, walking instead of driving,
                  using manual garden tools and equipment, sweeping and mopping
                  the floor, etc. All these actions will certainly help you to
                  also reduce unnecessary equipment at your place.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          {inputQ5Energy === "Cloud service" ? (
            <div className="EnergyCardColorOptions">
              <div
                onClick={showDataStore}
                className="EnergyCardColorOptionsEventDiv"
                style={{ backgroundColor: "#ee4347" }}
              >
                <div className="ColorOptionDiv">
                  <div className="ColorOptionTitle">
                    Store your data on a hard drive instead of cloud services
                  </div>{" "}
                  {dataStore ? (
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
                {dataStore ? (
                  <div className="ColorOptionText">
                    Cloud services consume large amounts of energy in their data
                    centres. If the storage space on your device is limited, try
                    storing the data on a memory stick or external hard drive.
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}

          {inputQ6Energy === "Music-videos" ? (
            <div className="EnergyCardColorOptions">
              <div
                onClick={showMusicStream}
                className="EnergyCardColorOptionsEventDiv"
                style={{ backgroundColor: "#f79521" }}
              >
                <div className="ColorOptionDiv">
                  <div className="ColorOptionTitle">
                    When streaming music: listen to music only rather than
                    watching music-videos
                  </div>{" "}
                  {musicStream ? (
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
                {musicStream ? (
                  <div className="ColorOptionText">
                    Listening to music via audio streaming platforms creates far
                    fewer emissions than watching videos. The most
                    energy-efficient way is to store songs locally on your phone
                    or computer. CO2 emissions caused by music streaming are up
                    to 33 times less than by high-quality video streaming.
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}

          {inputQ7BEnergy !== "3" ? (
            <div className="EnergyCardColorOptions">
              <div
                onClick={showCooking}
                className="EnergyCardColorOptionsEventDiv"
                style={{ backgroundColor: "#98cb63" }}
              >
                <div className="ColorOptionDiv">
                  <div className="ColorOptionTitle">
                    Save energy when you cook
                  </div>{" "}
                  {cooking ? (
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
                {cooking ? (
                  <div className="ColorOptionText">
                    {" "}
                    <div>
                      The kitchen is one place where you can adopt sustainable
                      practices without sacrificing comfort.
                    </div>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>1) </span>
                      Use a slow cooker as it requires the minimum amount of
                      energy.
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>2) </span>
                      Optimise your oven use. Try not to open the oven door
                      unless it is absolutely necessary and keep preheating time
                      to a minimum or do not preheat at all since it is often
                      unnecessary. Also, you can often turn off the oven before
                      the cooking time is complete because the residual heat
                      will finish cooking the food, and don’t forget to plan
                      your cooking to heat multiple dishes at the same time;
                      start with the food that requires the highest temperature
                      and time first.
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>3) </span>
                      If you cook with gas, consider switching to an electric
                      stove. Gas stoves lose heat through the burners, which
                      wastes a lot of energy.
                    </div>{" "}
                    <div>
                      <span style={{ fontWeight: "bold" }}>4) </span>
                      Use the size of pots and pans that cover the size of the
                      stove heaters completely so unnecessary energy is not
                      wasted. Using a lid to cover the pot will reduce cooking
                      times and save energy too.
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          {inputQ7CEnergy !== "3" ? (
            <div className="EnergyCardColorOptions">
              <div
                onClick={showFridge}
                className="EnergyCardColorOptionsEventDiv"
                style={{ backgroundColor: "#42a889" }}
              >
                <div className="ColorOptionDiv">
                  <div className="ColorOptionTitle">
                    Reduce energy usage of your fridge and freezer
                  </div>{" "}
                  {fridge ? (
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
                {fridge ? (
                  <div className="ColorOptionText">
                    <div>
                      The fridge and freezer are one of the kitchen appliances
                      that require more energy to operate. Some tips to save
                      energy while using the fridge and freezer are
                    </div>

                    <div>
                      <span style={{ fontWeight: "bold" }}>1) </span> Close the
                      door of the fridge.{" "}
                    </div>
                    <div>
                      {" "}
                      <span style={{ fontWeight: "bold" }}>2) </span> Don’t over
                      fill the fridge.
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>3) </span>
                      Let your food cool down before putting it in the fridge or
                      freezer.
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>4) </span>
                      Don’t put the fridge or freezer near sources of heat (such
                      as the sun or the stove).
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>5) </span>
                      Full freezers operate more efficiently than empty ones.
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>6) </span>
                      Regularly defrost your freezer. The more ice inside, the
                      more energy it uses, and
                    </div>
                    <div>
                      <span style={{ fontWeight: "bold" }}>7) </span>
                      Freezers are affected less than a refrigerator when the
                      door is opened because there is less uncontained air to
                      escape.
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          <div className="EnergyCardColorOptions">
            <div
              onClick={showComputer}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#7fc3eb" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Adjust your computer’s energy settings
                </div>{" "}
                {computer ? (
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
              {computer ? (
                <div className="ColorOptionText">
                  Computers can be set to automatically enter a low-power
                  “sleep” mode when not in use. Also make sure you turn off
                  printers or scanners when they are not in use.
                </div>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </div>
          </div>
          {inputQ3Energy !== "A/C" ? (
            <div className="EnergyCardColorOptions">
              <div
                onClick={showFans}
                className="EnergyCardColorOptionsEventDiv"
                style={{ backgroundColor: "#4386c6" }}
              >
                <div className="ColorOptionDiv">
                  <div className="ColorOptionTitle">
                    Use ceiling fans instead of air conditioning
                  </div>{" "}
                  {fans ? (
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
                {fans ? (
                  <div className="ColorOptionText">
                    Fans use significantly less energy than air conditioning to
                    achieve a cooling effect. In cold weather, set the fan to
                    drive air upward to break up the heat that rises and
                    ventilate the room.
                  </div>
                ) : (
                  <div style={{ display: "none" }}></div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
          <div className="EnergyCardColorOptions">
            <div
              onClick={showDishwasher}
              className="EnergyCardColorOptionsEventDiv"
              style={{ backgroundColor: "#095366" }}
            >
              <div className="ColorOptionDiv">
                <div className="ColorOptionTitle">
                  Use your dishwasher efficiently
                </div>{" "}
                {dishwasher ? (
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
              {dishwasher ? (
                <div className="ColorOptionText">
                  The way you use the dishwasher can affect the amount of energy
                  used. Make sure you use the energy-saving and low-heat
                  features to use less water and save energy, and remember to
                  only wash full loads.
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

export default FullRec2Energy;

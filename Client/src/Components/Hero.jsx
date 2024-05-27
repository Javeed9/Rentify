import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import rentARoom from "../assets/rentARoom.jpg";
import shareYourRoom from "../assets/shareYourRoom.jpg";
import Calender from "./Calender";
import Button from "./Button";

function Hero() {
  return (
    <>
      <div className="m-8 p-16 flex justify-center self-center bg-blue-700">
        <p className="text-[32px] text-white ">Renting property is never been this simple</p>
      </div>
      <div className="flex justify-center my-8 flex-wrap gap-10">
        <Link to={"/propertyList"}>
          <Card text="Find A Property" image={rentARoom}></Card>
        </Link>
        <Link to={"/rentproperty"}>
          <Card text="Rent A Property" image={shareYourRoom}></Card>
        </Link>
        <div className="flex justify-around">
          <Card>
            <div className="flex flex-col">
              <h2 className="text-2xl text-center font-bold">When would</h2>
              <h3 className="text-center">you shift?</h3>
              <div>
                <Calender />
              </div>
                <Button disabled={true}><p title="Still in development">Check Properties</p></Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Hero;

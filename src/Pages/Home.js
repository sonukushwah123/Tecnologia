import React from "react";

import ClientSr from "./HomePage/OurClients";
import TechnologiesSr from "./HomePage/Technologies";
import OfferingSr from "./HomePage/Offers";
import IndustriesSr from "./HomePage/Industries";
import SuccessStorySr from "./HomePage/Stories";
import Careers from "./HomePage/Careers";
import AwardsSr from "./HomePage/Awards";
import BlogSr from "./HomePage/Blog";
import SliderSr from "./HomePage/HomeBanner";
import HeaderSr from "../Components/Header"
import data from "./testing.json"

let Map = {
  HeaderSr:HeaderSr,
  ClientSr: ClientSr,
  TechnologiesSr: TechnologiesSr,
  OfferingSr: OfferingSr,
  IndustriesSr: IndustriesSr,
  SuccessStorySr: SuccessStorySr,
  AwardsSr: AwardsSr,
  BlogSr: BlogSr,
  SliderSr: SliderSr,
};

const Home = () => {




  const hello = data.message[0].Count
  console.log("hello",hello)

  // const hello = props.data;
  // console.log("=========================", hello);

  const key = Object.keys(hello[0]);
  console.log("key", key);

  const value = Object.values(hello[0]);

  const sorted = Object.keys(hello[0]).sort(function (a, b) {
    return hello[0][a] - hello[0][b];
  });

  console.log("sorted", sorted);

  // const entries = Object.entries(sorted);

  console.log("value", value);







  return (
    <div>
      <>
        {sorted.map((item, index) => {
          const Element = sorted[index];
          

          const capitalizeFirst = Element => {
            return Element.charAt(0).toUpperCase() + Element.slice(1);
          };
          console.log("element", capitalizeFirst(Element));
          var MyComponent = Map[capitalizeFirst(Element)];

          return<MyComponent />;
       
         
        })}

<Careers />
      </>
    </div>
  );
};

export default Home;

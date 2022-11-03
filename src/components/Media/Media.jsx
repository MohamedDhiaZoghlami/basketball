import axios from "axios";
import React, { useState, useEffect } from "react";
import "../Tour/Tour.scss";
import Img from "../../assets/media.jpg";
import Card from "../Card/Card";

const Media = () => {
  const [tours, setTours] = useState([]);
  //   useEffect(() => {
  //     fetchTours();
  //   }, []);
  //   const fetchTours = async () => {
  //     const result = await axios.get("url");
  //     setTours(result); //ou bien result.data;
  //   };
  return (
    <div className="tour_wrapper" id="media">
      <h1>Media</h1>
      <div className="tour_container">
        {/* {tours.map((e, i) => (
          <Card key={i} name={e.name} id={e.id} image={Img} />
        ))} */}
        <Card name="dzovi" id="1" image={Img} />
        <Card name="dzovi" id="1" image={Img} />
        <Card name="dzovi" id="1" image={Img} />
        <Card name="dzovi" id="1" image={Img} />
      </div>
    </div>
  );
};

export default Media;

import { useState, useEffect } from "react";
import Card from "./card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
export default function Freebook() {
  const [book, setbook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const filtered_data = res.data.filter(
          (data) => data.category === "free"
        );
        console.log(filtered_data);
        setbook(filtered_data);
      } catch (error) {
        console.log(error);
      }
    };
    getbook();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 6,
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:pd-20 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-5">Free Books offered</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            in officiis! Voluptate, accusamus? Dicta excepturi odit ducimus
            fugiat, dolores sunt harum vero provident doloribus quisquam
            pariatur dolorum autem, libero neque.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

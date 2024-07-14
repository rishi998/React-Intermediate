import Cards from "./card";
import booklist from "../../public/booklist";
import { Link } from "react-router-dom";
function Course() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:pd-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you
          <span className="text-pink-500"> here:)</span>
        </h1>
        <p className="mt-12 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio
          accusantium ducimus laboriosam ipsum ullam ut corporis sint dicta
          nemo, enim veniam, consectetur debitis! Molestias nobis repellat nulla
          necessitatibus numquam.
        </p>
        <Link to="/">
          <button className="mt-5 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {booklist.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Course;

function Card({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="max-w-screen-2xl container mx-auto md:pd-20 px-4 dark:bg-slate-900 dark:text-black">
        <div className="card bg-base-100 w-76 shadow-xl hover:scale-105 transition-transform duration-300">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary ">NEW</div>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              esse repellat quam recusandae aliquid itaque maiores nulla
              debitis.
            </p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-1 rounded-full border-[2px] hover:bg-pink-500 hover:px-2 hover:py-1 hover:text-white duration-500">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

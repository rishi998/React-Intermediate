export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:pd-20 px-6 flex flex-col md:flex-row mt-12 md:mt-32">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold">
            Hello, Welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2">Right</div>
      </div>
    </>
  );
}

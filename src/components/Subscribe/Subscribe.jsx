import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-0">
      <div className="border border-white rounded-2xl">
        <div className="flex flex-col gap-5 items-center m-5 border rounded-2xl py-10 md:py-14 background-image bg-white">
          
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
            Subscribe to our Newsletter
          </h2>

          <p className="font-medium text-base sm:text-lg md:text-xl text-gray-600 text-center">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <input
              className="py-3 px-4 sm:py-4 sm:px-6 border rounded-lg w-full sm:w-96 lg:w-80"
              type="email"
              placeholder="Enter your email"
            />
            <button className="font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg bg-gradient-to-r from-purple-500 to-yellow-400 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

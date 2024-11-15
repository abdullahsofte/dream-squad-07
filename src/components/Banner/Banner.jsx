import banner from "../../assets/img/banner-main.png";
import "./Banner.css";
import PropTypes from "prop-types";

const Banner = ({ handleAddCoin }) => {
  return (
    <div className="container mx-auto rounded-2xl bg-black mb-12 px-4 sm:px-8">
      <div className="relative rounded-2xl overflow-hidden">
        <div className="flex flex-col gap-8 items-center py-20">
          {/* Banner Image */}
          <img src={banner} alt="Banner" className="w-full max-w-xl object-cover h-auto rounded-xl" />
          
          {/* Heading */}
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl text-center">
            Assemble Your Ultimate Bangla 11 Cricket Team
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-medium text-gray-300 text-center">
            Beyond Boundaries Beyond Limits
          </p>

          {/* Button */}
          <div className="border border-yellow-700 p-1 rounded-xl">
            <button
              onClick={handleAddCoin}
              className="bg-yellow-700 font-bold text-gray-300 text-xl py-4 px-5 rounded-xl hover:bg-yellow-600"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleAddCoin: PropTypes.func.isRequired,
};

export default Banner;

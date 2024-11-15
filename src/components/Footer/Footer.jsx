import logo from "../../assets/img/logo-footer.png";
import Subscribe from "../Subscribe/Subscribe";

const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="relative w-11/12 lg:w-10/12 mx-auto">
        {/* Subscribe Section */}
        <div className="absolute z-10 -top-36 w-full">
          <Subscribe />
        </div>

        {/* Footer Content */}
        <div className="flex flex-col items-center pt-56 pb-20">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-40 lg:w-auto" />
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 w-full">
            {/* About Us */}
            <div className="w-full lg:w-2/3 mx-auto space-y-4">
              <h4 className="text-white font-semibold text-lg">About Us</h4>
              <p className="text-gray-400 text-sm lg:text-base">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-2/3 mx-auto space-y-4">
              <h4 className="text-white font-semibold text-lg">Quick Links</h4>
              <ul className="text-gray-400 list-disc list-inside space-y-3">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="w-full lg:w-auto space-y-4">
              <h4 className="text-white font-semibold text-lg">Subscribe</h4>
              <p className="text-gray-400 text-sm lg:text-base">
                Subscribe to our newsletter for the latest updates.
              </p>
              <div className="flex flex-wrap rounded-2xl w-full lg:w-fit overflow-hidden">
                <input
                  className="py-2 lg:py-4 px-4 lg:px-8 flex-1 text-sm lg:text-base"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="py-2 lg:py-4 px-4 lg:px-8 bg-gradient-to-r from-purple-500 to-yellow-400 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border border-gray-700" />
        <p className="text-center text-gray-400 py-8 text-sm lg:text-base">
          @2024 Dream Squad 07 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

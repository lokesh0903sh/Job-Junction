import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Logo & About Section --> */}
          <div>
            <h2 className="text-2xl font-bold mb-4">JobJunction</h2>
            <p className="text-gray-400">
            The ultimate platform for job seekers and employers alike. Whether you’re looking for your dream job or searching for top talent, we are here to connect you with the right opportunities.
            </p>
          </div>
          {/* <!-- Quick Links --> */}
          <div className="mx-20">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-blue-500">Home</Link>
              </li>
              <li className="mb-2">
              <Link to="/browse" className="hover:text-blue-500">Browse Jobs</Link>
              </li>
              <li className="mb-2">
              <Link to="/jobs" className="hover:text-blue-500">All Jobs</Link>
              </li>
            </ul>
          </div>
          {/* <!-- Contact Info --> */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">
              123 JobJunction St., Suite 100, JobCity, XYZ
            </p>
            <p className="text-gray-400 mt-2">Email: support@JobJunction.com</p>
            <p className="text-gray-400 mt-2">Phone: +123 456 7890</p>
          </div>
        </div>
        {/* <!-- Bottom Bar --> */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-gray-400">
          <div className="container mx-auto text-center md:text-left md:flex justify-between items-center">
            <p>&copy; 2024 JobJunction. All Rights Reserved.</p>
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
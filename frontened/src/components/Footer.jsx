import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="bg-gray-800 text-white py-10">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Logo & About Section --> */}
          <div>
            <h2 class="text-2xl font-bold mb-4">JobJunction</h2>
            <p class="text-gray-400">
              Your gateway to countless job opportunities. Find your dream job
              or discover the perfect candidate, all in one place.
            </p>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Browse Jobs
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Post a Job
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Resources --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Resume Builder
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Interview Tips
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  Job Alerts
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="hover:text-blue-500">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Info --> */}
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <p class="text-gray-400">
              123 JobJunction St., Suite 100, JobCity, XYZ
            </p>
            <p class="text-gray-400 mt-2">Email: support@JobJunction.com</p>
            <p class="text-gray-400 mt-2">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* <!-- Bottom Bar --> */}
        <div class="border-t border-gray-700 mt-8 pt-6 text-gray-400">
          <div class="container mx-auto text-center md:text-left md:flex justify-between items-center">
            <p>&copy; 2024 JobJunction. All Rights Reserved.</p>
            <ul class="flex space-x-4 mt-4 md:mt-0">
              <li>
                <a href="#" class="hover:text-blue-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-blue-500">
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

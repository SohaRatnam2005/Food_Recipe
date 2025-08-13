import React from "react";
import { FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div className="">
          <h3 className="text-lg font-bold mb-4 border-b border-pink-500 inline-block pb-1">
            About Food Blog App
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            At Food Blog App, we bring you step-by-step recipes, cooking hacks, 
            and inspiration for every meal. Whether you’re a seasoned chef or 
            a kitchen newbie, we make cooking easy, fun, and delicious.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-pink-500 inline-block pb-1">Explore</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="/recipes" className="hover:text-pink-400 transition">Recipes</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">About Us</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Featured Recipes */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-pink-500 inline-block pb-1">Popular Recipes</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/recipes/pav-bhaji" className="hover:text-pink-400 transition">🔥 Pav Bhaji</a></li>
            <li><a href="/recipes/paneer-butter-masala" className="hover:text-pink-400 transition">🥘 Paneer Butter Masala</a></li>
            <li><a href="/recipes/chocolate-cake" className="hover:text-pink-400 transition">🍫 Chocolate Cake</a></li>
            <li><a href="/recipes/biryani" className="hover:text-pink-400 transition">🍚 Hyderabadi Biryani</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-4 border-b border-pink-500 inline-block pb-1">Stay Connected</h4>
          <p className="text-gray-300 text-sm mb-4">
            Got a recipe idea or feedback? We’d love to hear from you!
          </p>
          <div className="flex gap-5 text-2xl">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      
       <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
    &copy; {currentYear} Soha's App — Made with ❤️ for food lovers everywhere.
      </div>
    </footer>
  );
}

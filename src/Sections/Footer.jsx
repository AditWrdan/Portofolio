import React from "react";
import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section id="Contact">
      <div className="backdrop-blur-lg bg-primary/40 px-4 md:px-16 lg:px-28 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Aditya Wardana</h2>
            <p className="text-gray-300">
              {" "}
              UI/UX - Desktop Application - Web Developer
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#home" className="hover:underline text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#About" className="hover:underline text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#Projects" className="hover:underline text-gray-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#footer" className="hover:underline text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <div className="flex gap-3">
              {mySocials.map((social, index) => (
                <a href={social.href} key={index}>
                  <img src={social.icon} className="w-5 h-5" alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

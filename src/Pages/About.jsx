import React from "react";
import Navigationbar from "../Components/Navigationbar";
import { FaTasks, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navigationbar />
      <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-wide mb-4">
            About TaskBuddy
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            TaskBuddy is your ultimate task management companion, helping you
            stay organized and productive. Plan, track, and accomplish your goals
            effortlessly with our intuitive interface.
          </p>
        </div>

        <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
          <div className="bg-indigo-800/80 p-6 rounded-lg shadow-lg text-center">
            <FaTasks className="text-4xl mx-auto text-violet-300 mb-4" />
            <h2 className="text-xl font-semibold">Task Management</h2>
            <p className="mt-2 text-sm">
              Create, organize, and track tasks efficiently with an intuitive
              dashboard.
            </p>
          </div>

          <div className="bg-blue-800/80 p-6 rounded-lg shadow-lg text-center">
            <FaClock className="text-4xl mx-auto text-violet-300 mb-4" />
            <h2 className="text-xl font-semibold">Time Tracking</h2>
            <p className="mt-2 text-sm">
              Keep an eye on deadlines and improve productivity with smart time
              tracking.
            </p>
          </div>
        </div>

        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">Join TaskBuddy Today!</h2>
          <p className="mt-2 text-sm max-w-lg mx-auto">
            Stay productive and take control of your tasks with TaskBuddy.
            Start managing your work like a pro!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

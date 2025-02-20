import { Button } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navigationbar from "../Components/Navigationbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    <Navigationbar />
    <div className="flex flex-col justify-center items-center">
      <div className="max-w-screen-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <img
            src="./logo.png"
            alt="TaskBuddy Logo"
            className="h-60 w-60 md:h-96 md:w-96 object-cover"
          />
          <p className="text-purple-900 text-sm m-10 font-mono md:text-lg text-center sm:text-left">
            Stay organized and boost productivity with TaskBuddy – your smart
            task manager! Easily create, track, and complete tasks with a
            seamless and intuitive interface. Get things done, the smart way.🚀
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <Button
          size="xl"
          className="bg-gradient-to-r from-indigo-700 via-blue-500 to-indigo-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </Button>
      </div>
    </div>
    </>
  );
};

export default Home;

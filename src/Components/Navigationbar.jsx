import React, { useContext } from "react";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../App";

const Navigationbar = () => {
  const [currentUser,setCurrentUser] = useContext(myContext)
  const path = useLocation().pathname;
  const navigate = useNavigate()

  const handleSignOut = async()=>{
    localStorage.removeItem('Token')
    navigate('/signin')
  }

  return (
    <Navbar fluid className="bg-indigo-400">
      <Navbar.Brand href="/">
        <Button className="bg-gradient-to-r from-indigo-600 via-indigo-200 to-indigo-600">
          <img
            src="./logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="TaskBuddy Logo"
          />
          <span className="self-center whitespace-nowrap text-xl text-indigo-950 font-semibold dark:text-white">
            TaskBuddy
          </span>
        </Button>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="./avatar.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{currentUser.userName}</span>
            <span className="block truncate text-sm font-medium">
              {currentUser.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg" active={path === "/"}>
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          className="text-lg"
          active={path === "/about"}
        >
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;

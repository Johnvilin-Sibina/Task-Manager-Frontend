import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmLeft, HiChartPie } from "react-icons/hi";
import { FaTasks, FaHome } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
    
    const location = useLocation()
    const [tab,setTab] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabUrl = urlParams.get("tab");
        if (tabUrl) {
          setTab(tabUrl);
        }
      }, [location.search]);

      const handleSignOut = async()=>{
        localStorage.removeItem('Token')
        navigate('/signin')
      }

  return (
    <Sidebar className="h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Logo>
            <div className="flex flex-row w-full items-center p-3 bg-gradient-to-r from-indigo-600 via-indigo-200 to-indigo-600 rounded-lg">
              <img
                src="./logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="TaskBuddy Logo"
              />
              <span className="self-center whitespace-nowrap text-xl text-indigo-950 font-semibold dark:text-white">
                TaskBuddy
              </span>
            </div>
          </Sidebar.Logo>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} to="/dashboard?tab=home" active={tab==='home'} icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
         <Sidebar.Item as={Link} to="/dashboard?tab=mytasks"  active={tab==='mytasks'} icon={FaTasks}>
            My Tasks
          </Sidebar.Item>
         <Sidebar.Item as={Link} to="/dashboard?tab=addtask" active={tab==='addtask'} icon={MdOutlineAddTask}>
            Add Task
          </Sidebar.Item>
          <Sidebar.Item as={Link} to='/' icon={FaHome}>
            Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item onClick={handleSignOut} icon={HiArrowSmLeft}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSidebar;

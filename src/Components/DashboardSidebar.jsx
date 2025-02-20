import React from "react";
import { Sidebar } from "flowbite-react";
import { HiArrowSmLeft, HiChartPie } from "react-icons/hi";
import { FaTasks, FaHome } from "react-icons/fa";
import { MdOutlineAddTask } from "react-icons/md";

const DashboardSidebar = () => {
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
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaTasks}>
            My Tasks
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdOutlineAddTask}>
            Add Task
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={FaHome}>
            Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiArrowSmLeft}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashboardSidebar;

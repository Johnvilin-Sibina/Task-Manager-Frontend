import React, { useEffect, useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHome from '../Pages/DashboardHome';
import { useLocation } from 'react-router-dom';
import AddTask from '../Pages/AddTask';

const Dashboard = () => {
    const location = useLocation()
    const [tab,setTab] = useState()

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabUrl = urlParams.get("tab");
        if (tabUrl) {
          setTab(tabUrl);
        }
      }, [location.search]);

    return (
        <div className="flex h-screen">
          <DashboardSidebar />
          {tab==='home' && <DashboardHome />}
          {tab==='addtask' && <AddTask />}
        </div>
    );
};

export default Dashboard;
import React, { useEffect, useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHome from '../Pages/DashboardHome';
import { useLocation } from 'react-router-dom';
import AddTask from '../Pages/AddTask';
import Tasks from '../Pages/Tasks';
import EditTask from '../Pages/EditTask';

const Dashboard = () => {
    const location = useLocation()
    const [tab,setTab] = useState()
    const [taskId, setTaskId] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabUrl = urlParams.get("tab");
        const idUrl = urlParams.get("id");
        if (tabUrl) {
          setTab(tabUrl);
        }
        if (idUrl) {
            setTaskId(idUrl);
        }
      }, [location.search]);

    return (
        <div className="flex h-screen">
          <DashboardSidebar />
          {tab==='home' && <DashboardHome />}
          {tab==='addtask' && <AddTask />}
          {tab==='mytasks' && <Tasks />}
          {tab === 'edittask' && taskId && <EditTask taskId={taskId} />}
        </div>
    );
};

export default Dashboard;
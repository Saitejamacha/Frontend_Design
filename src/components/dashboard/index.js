import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbWaveSawTool } from "react-icons/tb";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { FaRegPlayCircle } from "react-icons/fa";
import { PiUserCirclePlus } from "react-icons/pi";
import { LuLogOut } from "react-icons/lu";
import { FiTrendingUp } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { BsUpload } from "react-icons/bs";
import user_img from "../../assets/user_img.jpg";
import "./index.css";

Chart.register(...registerables);

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const revenueChartRef = useRef(null);
  const visitorsChartRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const revenueData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [30, 50, 40, 60, 70, 50, 90, 100, 80, 60, 70, 110],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const visitorsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Visitors",
        data: [20, 30, 50, 40, 60, 80, 70],
        borderColor: "#7f56d9",
        backgroundColor: "#7f56d9",
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
    barThickness: 10,
    maxBarThickness: 15,
  };

  useEffect(() => {
    if (revenueChartRef.current && visitorsChartRef.current) {
      const revenueChartInstance = new Chart(revenueChartRef.current, {
        type: "line",
        data: revenueData,
        options: chartOptions,
      });

      const visitorsChartInstance = new Chart(visitorsChartRef.current, {
        type: "bar",
        data: visitorsData,
        options: chartOptions,
      });

      return () => {
        revenueChartInstance.destroy();
        visitorsChartInstance.destroy();
      };
    }
  }, []);

  const onClickLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {isSidebarVisible && (
        <div className="sidebar" >
          <h2>Skilify Admin</h2>
          <ul>
            <li className="list-styles">
              <FiHome className="side-bar-icon" /> Dashboard
            </li>
            <li className="list-styles">
              <AiOutlineSchedule className="side-bar-icon" />
              My Schedule
            </li>
            <li className="list-styles">
              <FiMessageSquare className="side-bar-icon" /> Message
            </li>
            <li className="list-styles">
              <FaRegPlayCircle className="side-bar-icon" /> My Course
            </li>
            <li className="list-styles">
              <FiTrendingUp className="side-bar-icon" /> My Status
            </li>
            <li className="list-styles">
              <PiUserCirclePlus className="side-bar-icon" /> My Account
            </li>
            <li className="list-styles" onClick={onClickLogout}>
              <LuLogOut className="side-bar-icon" /> Logout
            </li>
          </ul>
        </div>
      )}

      <div className="main-content">
        <header className="header-styles">
          <button className="toggle-btn" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>Hello Mad 👋</h1>
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
          />
          <button className="upload-btn-styles">
            <BsUpload className="upload-icon-styles" />
            New Upload
          </button>
          <div className="icons-container">
            <MdOutlineNotificationsNone className="notification-styles" />
            <LuMessageCircleMore className="notification-styles" />
            <TbWaveSawTool className="notification-styles" />
          </div>
          <div className="user-info">
            <span className="user-name-designationtext">
              TheMad <br /> Designer
            </span>
            <img src={user_img} alt="User Avatar" />
          </div>
        </header>

        <div className="stats">
          <div className="card">
            <div className="card-inner-styles">
              <h3>Impressions</h3>
              <p>832</p>
            </div>
          </div>
          <div className="card">
            <div className="card-inner-styles">
              <h3>Total Audience</h3>
              <p>568</p>
            </div>
          </div>
          <div className="card">
            <div className="card-inner-styles">
              <h3>Engagements</h3>
              <p>358</p>
            </div>
          </div>
          <div className="card">
            <div className="card-inner-styles">
              <h3>Engaged Audience</h3>
              <p>468</p>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="chart">
            <h4>Revenue Chart</h4>
            <canvas ref={revenueChartRef}></canvas>
          </div>
          <div className="chart">
            <h4>Visitors Chart</h4>
            <canvas ref={visitorsChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState,useEffect } from "react";


export default function NavBar() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      // Reset the timer to 60 seconds after it reaches 0
      setTimeLeft(60);
    }
  }, [timeLeft]);
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        {/* Left Section */}
        <div className="d-flex align-items-center">
          <a className="navbar-brand logo" href="#">
            HODLINFO
          </a>
        </div>

        {/* Middle Section */}
        <div className="d-flex mx-auto">
          <div className="dropdown me-3">
            <button
              className="btn btn-secondary dropdown-toggle px-4 py-2 rounded-4 dropdown-bg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              INR
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  BTC
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <button
              className="btn btn-secondary dropdown-toggle px-4 py-2 rounded-4 dropdown-bg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              BTC
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  BTC
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown me-3">
            <button
              className="btn btn-secondary dropdown-toggle px-4 py-2 rounded-4 dropdown-bg"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              BUY BTC
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  BTC
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center">
          <div className="me-3 d-flex">



            <div className="App1">
              <div className="circle">
                <div className="time">{timeLeft}</div>
              </div>
            </div>




            <button className="btn btn-info fs-5 ms-4  text-light telegram">
              <i class="bi bi-telegram"></i> Connect Telegram
            </button>
          </div>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}

import React, {useState, useEffect} from "react";

const Taskbar = () => {
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    let tick = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="taskbar-container">
      <button className="start-menu-button">START</button>
      <p>{date}</p>
    </div>
  );
};

export default Taskbar;

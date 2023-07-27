import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar({ initialNow, min, max }) {
  const [now, setNow] = useState(initialNow);

  useEffect(() => {
    const intervalCode = setInterval(() => {
      setNow((prevNow) => {
        const nextNow = prevNow + 1;
        return nextNow > max ? max : nextNow;
      });
    }, 50);

    setTimeout(() => {
      clearInterval(intervalCode);
      setNow(max);
    }, 5000);

    return () => {
      clearInterval(intervalCode);
    };
  }, [max]);
  return (
    <div className="container">
      <h2>Progressing</h2>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${(now / max) * 100}%` }}
        >
          {now}%
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

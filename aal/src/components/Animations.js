import React from "react";

const Animations = () => {
  return (
    <div className="animations">

      <div className="sun">
        <svg className="svg" viewBox="-10 -70 800 800">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="50%" x2="40%" y2="50%">
              <stop offset="0%" style={{stopColor:"#ffbb6a", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#ff5700", stopOpacity:1}} />
            </linearGradient>
          </defs>
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="url(#grad1)"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="first-wave">
        <svg className="svg" viewBox="0 60 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="second-wave">
        <svg className="svg" viewBox="0 40 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="third-wave">
        <svg className="svg" viewBox="0 20 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="fourth-wave">
        <svg className="svg" viewBox="0 0 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="fifth-wave">
        <svg className="svg" viewBox="0 -20 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="sixth-wave">
        <svg className="svg" viewBox="0 -40 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="seventh-wave">
        <svg className="svg" viewBox="0 -60 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="eighth-wave">
        <svg className="svg" viewBox="0 -80 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#0085eb"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

      <div className="sand">
        <svg className="svg" viewBox="0 -40 800 1500">
          <path stroke="transparent" fill="transparent" />
          <path
            className="line"
            fill="#dbcd9a"
            stroke-width="1"
            fill-opacity=".95"
          />
        </svg>
      </div>

    </div>
  );
};

export default Animations;

import React from 'react';

const AdvertisementBar = () => {
  return (
    <div
      style={{
        width: "320px",
        backgroundColor: "#f8f9fa",
        borderLeft: "1px solid #ddd",
        minHeight: "calc(100vh - 56px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h6>Advertisements</h6>
      <div className="text-center mt-3">
        <img
          src="/ads-sample.png"
          alt="Ad"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
    </div>
  );
};

export default AdvertisementBar;
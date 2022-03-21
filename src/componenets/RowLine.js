import React from "react";

export const RowLine = ({ children }) => {
  return (
    <div className="row gx-5 pt-3">
      <div className="col">
        <div className="d-flex justify-content-center">{children}</div>
      </div>
    </div>
  );
};

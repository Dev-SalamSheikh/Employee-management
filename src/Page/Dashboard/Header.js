import React from "react";

function Header({ setIsAdding }) {
  return (
    <header>
      <h1 className="text-center">Employee Managment System</h1>
      <div
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "18px" }}
      >
        <button className="round-button" onClick={() => setIsAdding(true)}>
          Add Employee
        </button>
      </div>
    </header>
  );
}

export default Header;

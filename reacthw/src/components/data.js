import React from "react";
import employeeData from "../API/employees";

function Data({ employees }) {
  for (var i; i < employeeData.length; i++) {
    employees = employeeData[i]
  }

  return (
      <tr>
        <th>{employees}</th>
      </tr>
  );
}

export default Data;

/**
 * Challenge:
 * I want to display a list of employees and be able to filter by first name or last name.
 * Also add the ability to exclude terminated employees by checking it off.
 * Display the employe info on its entirity
 * At the bottom I would like to see the total salary for my employee selection/filter.
 * Please also show a loading indicator.
 *
 * NOTE:
 * You get the list of employees using EmployeeService -> getEmployees
 *
 */
import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import UserTable from "./Table";
import { getEmployees } from "./EmployeeService";

export default function App() {
  const [employee, setEmployees] = useState([]);

  useEffect(async () => {
    setEmployees(await getEmployees());
  }, []);

  const getTotalSalary = () => {
    let total = 0;
    employee?.forEach((element) => {
      total += element.salary;
    });
    return total;
  };

  const totalSalary = getTotalSalary();

  const deleteUser = (id) => {
    setEmployees(employee.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1 className="m-4">Employee Admin</h1>
      <div className="flex-row">
        <div className="flex-large">
          {employee && (
            <div>
              <Autocomplete
                className="mb-4"
                options={employee}
                getOptionLabel={(option) => option.firstName}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Busca por nome"
                    variant="outlined"
                  />
                )}
              />
              <Autocomplete
                className="mb-4"
                options={employee}
                getOptionLabel={(option) => option.lastName}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Busca por Sobrenome"
                    variant="outlined"
                  />
                )}
              />
              <UserTable employee={employee} deleteUser={deleteUser} />
            </div>
          )}
        </div>
      </div>
      {employee.length > 1 && <p>Total salary: {totalSalary}</p>}
    </div>
  );
}

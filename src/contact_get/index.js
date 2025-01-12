import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import "./contact_get.css";

const ContactGet = () => {
  const [data, setData] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  useEffect(() => {
    axios
      .get('https://dev.moneylaundry.wenidi.com/api/contactUs/getContactUs')
      .then(response => setData(response.data.data[0])) // Fetch all data
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: 'Contact Name',
        accessor: 'contact_name', // Accessor key matches the API response keys
      },
      {
        Header: 'Contact Email',
        accessor: 'contact_email',
      },
      {
        Header: 'Contact Phone',
        accessor: 'contact_phone',
      },
      {
        Header: 'Contact Message',
        accessor: 'contact_message',
      },
    ],
    []
  );

  // UseTable hook for pagination and filtering
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { globalFilter, pageIndex },
  } = useTable(
    { columns, data, initialState: { pageSize: 10 } },
    useGlobalFilter, // For global search
    usePagination // For pagination
  );

  return (
    <div className="dashboardOuter">
      <div className="dashboardHeader">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logoData">
              <img src="./images/logoInfo.png" alt="Logo" />
            </div>
            <div className="d-flex orderList">
              <NavLink className="loginData" to="/dashboard">Order List</NavLink>
              <NavLink className="loginData" to="/contact_list">Contact List</NavLink>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="welcomeDashboard">
        <div className="container">
          <h2>Contact List</h2>
          <p>Welcome to the Contact List!</p>
          <div className="tableDataOrderInfo">
            {/* Search Bar */}
            <input
              type="text"
              value={globalFilter || ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search contacts..."
              className="searchInput"
            />
            {/* Table */}
            <table {...getTableProps()} className="dataTable">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="pagination">
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                Previous
              </button>
              <span>
                Page {pageIndex + 1}
              </span>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactGet;

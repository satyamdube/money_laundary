import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useTable, usePagination } from "react-table";
import "./dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  useEffect(() => {
    axios
      .get("https://dev.moneylaundry.wenidi.com/api/book_now/getOrders")
      .then((response) => {
        setData(response.data.data);
        setFilteredData(response.data.data); // Set initial filtered data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle Date Range Filter
  const handleDateFilter = () => {
    if (startDate && endDate) {
      const filtered = data.filter((order) => {
        const orderDate = new Date(order.order_pickup_date);
        return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Reset filter if dates are not set
    }
  };

  // Handle Search Filter
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = data.filter((order) =>
      Object.values(order).some(
        (val) => val && val.toString().toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  // Define columns for the table
  const columns = React.useMemo(
    () => [
      {
        Header: "Order Date",
        accessor: "order_pickup_date",
        Cell: ({ value }) => new Date(value).toLocaleDateString(), // Format date
      },
      { Header: "Order Time", accessor: "order_pickup_time" },
      { Header: "Customer Name", accessor: "customer_name" },
      { Header: "Customer Address", accessor: "customer_address" },
      { Header: "Customer Email", accessor: "customer_email" },
      { Header: "Customer Phone", accessor: "customer_phone" },
      { Header: "Customer Instruction", accessor: "order_instruction" },
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
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    state: { pageIndex },
  } = useTable(
    { columns, data: filteredData, initialState: { pageSize: 10 } },
    usePagination
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
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="welcomeDashboard">
        <div className="container">
          <h2>Dashboard</h2>
          <p>Welcome to the Order List!</p>

          {/* Date Range Filter */}
          <div className="d-flex justify-contents-between mt-5">
            {/* Search Filter */}
          <div className="searchFilter">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search Orders"
              className="searchInput"
            />
            </div>
          <div className="dateFilter">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date"
              className="dateInput"
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date"
              className="dateInput"
            />
            <button onClick={handleDateFilter} className="filterButton">
              Apply Filter
            </button>
          </div>
          </div>
          <div className="tableDataOrderInfo">
            {/* Data Table */}
            <table {...getTableProps()} className="dataTable">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
              <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                Previous
              </button>
              <span>Page {pageIndex + 1}</span>
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

export default Dashboard;

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
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  useEffect(() => {
    axios
      .get("https://themoneylaundry.in/api/book_now/orders/today")
      .then((response) => {
        if(Array.isArray(response.data.data[0])) {
          console.log(response);
          setData(response.data.data[0]);
          setFilteredData(response.data.data[0]); // Set initial filtered data
        } else {
          console.error("API response data is not an array:", response.data.data[0]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle Date Range Filter
  const handleDateFilter = async () => {

    if (!startDate || !endDate) {
      alert("Please select both start and end dates");
      return;
    }

    if (startDate > endDate) {
      alert("Start date cannot be later than end date.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("https://themoneylaundry.in/api/book_now/orders/filterbyDate", {
          startDate,
          endDate,
      });
      console.log(response.data.message);
      if (response.data.message && response.data.message === "No Records Found") {
        setFilteredData([]);
        alert("No Records Found for the selected date range.");
      }else if(Array.isArray(response.data.orders[0])) {
        setFilteredData(response.data.orders[0]);
      } else {
        console.error("API response data is not an array:", response.data.data);
        alert("Unexpected response format from the server.");
      }
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Something went wrong.'}`);
      } else {
      console.error("Error fetching data:", error);
      alert("Failed to fetch data. Please try again.");
      }
    } finally {
      setLoading(false);
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
        Header: "Order Pickup Date",
        accessor: "order_pickup_date",
        Cell: ({ value }) => {
          return value ? new Date(value).toLocaleDateString() : "";
        },
      },
      { Header: "Order Pickup Time", accessor: "order_pickup_time" },
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
    { columns, data: filteredData || [], initialState: { pageSize: 10 } },
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
          <div className="searchFilterInput">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search Orders By Name, Address, Email, Phone"
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

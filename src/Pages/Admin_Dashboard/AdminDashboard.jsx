import React, { useState, useEffect } from "react";
import { FaArrowUp, FaDollarSign, FaWallet } from "react-icons/fa";
import { MdCreditScore, MdOutlineAutoGraph } from "react-icons/md";
import toast from "react-hot-toast";
import "./Style.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ComposedChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FaArrowDown } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { RiExchangeDollarLine } from "react-icons/ri";
import { BsBank2 } from "react-icons/bs";
import { IoMdCash } from "react-icons/io";
import { FaMoneyCheckDollar, FaSackDollar } from "react-icons/fa6";
import doctorService from "../../Services/doctorService";
import { PeopleAltOutlined, Shop, ShoppingBag } from "@mui/icons-material";
import patientService from "../../Services/patientService";
import saleService from "../../Services/saleService";
import { format } from "date-fns";


const recent = [
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "123 Maple Street, Willowville, CA 98765",
    id: "1",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Partial",
    addres: "456 Oak Avenue, Pine City, NY 54321",
    id: "2",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Paid",
    addres: "789 Elm Lane, Lakeside, TX 12345",
    id: "3",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "321 Birch Road, Mountainview, FL 67890",
    id: "4",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "567 Cedar Court, Riverdale, GA 23456",
    id: "5",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "567 Cedar Court, Riverdale, GA 23456",
    id: "5",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "567 Cedar Court, Riverdale, GA 23456",
    id: "5",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "567 Cedar Court, Riverdale, GA 23456",
    id: "5",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "567 Cedar Court, Riverdale, GA 23456",
    id: "5",
    date: "11/12/2023",
  },
  {
    name: "Jonathan Doe",
    amount: "50,000",
    status: "Due",
    addres: "567 Cedar Court, Riverdale, GA 23456",
    id: "5",
    date: "11/12/2023",
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group b", value: 700 },
];

const data02 = [
  { name: "Income", value: 2500 },
  { name: "Expense", value: 3600 },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <text y={"96%"} x={cx} dx={-40} style={{ fontSize: 18 }}>
        Rs. {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

const barChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const radialChart = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: -15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: -8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: -2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminDashboard = () => {
  const [select, setselect] = useState(false);
  const [activeIndex, setactiveIndex] = useState(0);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [sales, setSales] = useState([]);
  const [todayProfit, setTodayProfit] = useState([]);
  const [salesInvoices, setSalesInvoices] = useState([]);
  const [monthSales, setMonthSales] = useState([]);
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState("");

  const formatDate = (dateString) => {
    if (!dateString) return ""; // Handle null or undefined
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const getDoctors = async () => {
      try {
        setLoading(true);
        const response = await doctorService.fetchTotal();
        console.log(response);
        setDoctors(response.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching doctors");
      }
    };
    getDoctors();
  }, []);

  useEffect(() => {
    const getPatients = async () => {
      try {
        setLoading(true);
        const response = await patientService.fetchTotal();
        console.log(response);
        setPatients(response.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching doctors");
      }
    };
    getPatients();
  }, []);

  useEffect(() => {
    const getSales = async () => {
      try {
        setLoading(true);
        const response = await saleService.fetchTotal();
        console.log(response);
        setSales(response.total);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching doctors");
      }
    };
    getSales();
  }, []);

  useEffect(() => {
    const getTodayProfit = async () => {
      try {
        setLoading(true);
        const response = await saleService.fetchTodayProfit();
        console.log(response);
        setTodayProfit(response.profit[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching Sales");
      }
    };
    getTodayProfit();
  }, []);


  useEffect(() => {
    const getMonthSales = async () => {
      try {
        setLoading(true);
        const response = await saleService.monthSales();
        console.log(response);
        setMonthSales(response.sales);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching Sales");
      }
    };
    getMonthSales();
  }, []);

  useEffect(() => {
    const getInvoiceSales = async () => {
      try {
        setLoading(true);
        const response = await saleService.fetchInvoiceSales();
        console.log(response);
        setSalesInvoices(response.sales);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching doctors");
      }
    };
    getInvoiceSales();
  }, []);


  return (
    <div>
      <div className=" flex max-md:flex-col gap-[2%] ">
        <div className="w-[70%] max-md:w-[100%] ">
          <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-2 max-md:gap-[40px]">
           
            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 10,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#F7E3CC",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="py-2"
              >
                <PeopleAltOutlined />
              </div>
              <div className="py-6">
                <p style={{ fontSize: 20, fontWeight: "600" }}>
                  {loading ? "Loading..." : doctors}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Total Doctors
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 10,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#F9ECD9",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="py-2"
              >
                <PeopleAltOutlined />
              </div>
              <div className="py-6">
                <p style={{ fontSize: 20, fontWeight: "600" }}>
                  {loading ? "Loading..." : patients}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Total Patients
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 10,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#FFFAE6",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="py-2"
              >
                <ShoppingBag />
              </div>
              <div className="py-6">
                <p style={{ fontSize: 20, fontWeight: "600" }}>
                  {loading ? "Loading..." : sales}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Total Sales
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 10,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#F7CEE2",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="py-2"
              >
                <ShoppingBag />
              </div>
              <div className="py-6">
                <p style={{ fontSize: 20, fontWeight: "600" }}>
                Rs:{loading ? "Loading..." : todayProfit.profit}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Today {todayProfit.profit_status}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 10,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#CCCAF0",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="py-2"
              >
                <ShoppingBag />
              </div>
              <div className="py-6">
                <p style={{ fontSize: 20, fontWeight: "600" }}>
                  Rs:{loading ? "Loading..." : todayProfit.total_sales}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Today Sales
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                backgroundColor: "#fff",
                borderRadius: 10,
                width: "100%",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: "20%",
                  backgroundColor: "#CFDFEF",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
                className="py-2"
              >
                <ShoppingBag />
              </div>
              <div className="py-6">
                <p style={{ fontSize: 20, fontWeight: "600" }}>
                Rs:{loading ? "Loading..." : todayProfit.total_purchases}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    marginTop: 2,
                    fontWeight: "500",
                    color: "gray",
                  }}
                >
                  Today Purchases
                </p>
              </div>
            </div>
            
                    
          </div>
        </div>

        <div
          style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)" }}
          className="piechart"
        >
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                activeIndex={activeIndex}
                onPointerEnter={(...index) => setactiveIndex(index)}
                fill="#8884d8"
                activeShape={renderActiveShape}
              >
                {data02.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS?.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* <h1 className="text-center mt-[-20px] pb-2">Rs. 500000</h1> */}
        </div>
      </div>
      <div className="seconContainer" style={{ marginTop: 20 }}>
        <div
          style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)", padding: 10 }}
          className="areachart"
        >
          <h4 className="py-2 font-[600]">Monthly Sales</h4>

          <div className="recentMonth">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                  data={monthSales}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="100%"
                        stopColor="#3F99F2"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="sale_date" />
                  <YAxis domain={[0, "dataMax + 10000"]} />{" "}
                  {/* Set dynamic range */}
                  <Tooltip />
                  <Area
                    type="monotone" /* Ensure the type is correct */
                    dataKey="total_amount"
                    stroke="#3F99F2"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
        <div
          style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)", padding: 10 }}
          className="invoice"
        >
          <h4 className="py-2 font-[600]">Recent Invoices</h4>
          <div className="recent" style={{}}>
            {salesInvoices?.map((item) => (
              <div className="rounded-lg bg-white flex items-center mx-auto mt-4 border-l-4 border-green-500 shadow-md">
                <div className="flex flex-row p-2  w-full items-center">
                  <div className="mt-[4px] w-full">
                    <div className="flex justify-between">
                      <h1 className="text-gray-500 text-sm font-[600] ">
                        {formatDate(item?.checkup_date)}
                      </h1>
                      <h1 className="text-gray-500 font-[600] text-sm">
                        invoice # {item?.patient_id}
                      </h1>
                    </div>
                    <p className="text-gray-500 my-[2px] font-[500] text-sm">
                      {item?.full_name}
                    </p>
                    <div className="flex justify-between ">
                      <div className=" text-white bg-green-500 rounded-lg text-xs py-1 px-2 w-16 text-center">
                        Qty :{item?.total_quantity}
                      </div>
                      <span className="text-red-500 font-bold ">
                        Rs.{item?.total_amount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="thirdContainer">
        <div
          className="RPcontainer"
          style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="amountReceived">
            <div
              style={{ display: "flex", gap: 10, paddingLeft: 20 }}
              className="py-4"
            >
              <h4 className="font-[600]">Amount Received</h4>
              <FaArrowDown
                size={18}
                style={{ color: "green", marginLeft: 6 }}
              />
            </div>

            <div className="recieved">
              {recent?.map((item) => (
                <div
                  className="rounded-lg bg-white flex items-center mx-auto mt-4 "
                  style={{
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex flex-row p-4 w-full items-center">
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="font-[500] text-sm text-gray-600">
                          {item?.date}
                        </p>
                        <p className="text-gray-500">CASH</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[15px] font-[600] text-gray-600">
                          {item?.name}
                        </p>
                        <div className="flex">
                          <p className="text-green-500 font-bold text-right">
                            Rs.{item?.amount}
                          </p>
                          <FaArrowDown
                            className="text-green-500 ml-2 mt-[4px]"
                            size={14}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="amountReceived">
            <div
              style={{ display: "flex", gap: 10, paddingLeft: 20 }}
              className="py-4"
            >
              <h4 className=" font-[600]">Amount Paid</h4>
              <FaArrowUp size={18} style={{ color: "red", marginLeft: 6 }} />
            </div>
            <div className="paid">
              {recent?.map((item) => (
                <div
                  className="rounded-lg bg-white flex items-center mx-auto mt-4 "
                  style={{
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="flex flex-row p-4 w-full items-center">
                    <div className=" w-full">
                      <div className="flex justify-between">
                        <p className="font-[500] text-sm text-gray-600">
                          {item?.date}
                        </p>
                        <p className="text-gray-500">CASH</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[15px] font-[600] text-gray-600">
                          {item?.name}
                        </p>
                        <div className="flex">
                          <p className="text-red-500 font-bold text-right">
                            Rs.{item?.amount}
                          </p>
                          <FaArrowUp
                            className="text-red-500 ml-2 mt-[4px]"
                            size={14}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: 10 }}
          className="barChart"
        >
          <h4 className="my-2 font-[600]">Daily Transactions</h4>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={barChart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="green" />
              <Bar dataKey="uv" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* <div className="stockContainer">
        <div
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: 10 }}
          className="radialbar"
        >
          <div style={{ display: "flex", gap: 10, paddingLeft: 20 }}>
            <h4 className="my-2 font-[600]">Stock</h4>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            <RadialBarChart
              innerRadius="20%"
              outerRadius="110%"
              data={radialChart}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                label={{ fill: "#666", position: "insideStart" }}
                background
                clockWise={true}
                dataKey="uv"
              />
              <Legend />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

      </div> */}

      <div className="purchaseContainer">
        {/* <div
          className="purchaseTable"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: 10 }}
        >
          <div style={{ display: "flex", gap: 10, paddingLeft: 20 }}>
            <h4 className="my-2 font-[600]">Sale Purchase History</h4>
            <AiOutlineStock
              size={30}
              style={{ color: "red", marginTop: "2px" }}
            />
          </div>
          <div
            className="h-[29rem] overflow-y-auto "
          >
         
            {recent?.map((value, index) => (
             <div
             style={{
               borderRadius: 5,
               backgroundColor: "white",
               alignItems: "center",
               alignContent: "center",
               marginLeft: "auto",
               marginRight: "auto",
               marginTop: 8,
               boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
               padding:6,

             }} 
             className="border-[1px] border-gray-200"
           >
               <div
                 className="grid grid-cols-4 gap-6 w-[100%] p-2"  >
                
                   <p className="text-sm font-[500]">Date</p>
                
                   <p style={{ fontSize: 14, color: "gray" }}>invoice</p>
                   <p style={{ fontSize: 14, color: "gray" }}>Supplier</p>
                
                 <p
                   style={{
                     color: "red",
                     fontWeight: 500,
                     textAlign: "right",
                   }}
                 >
                   Rs. 500,000
                 </p>
               </div>
           </div>
            ))}
          </div>
        </div> */}
        {/* <div
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", padding: 10 }}
          className="barChart"
        >
          <h4 className="my-2 font-[600] mb-2">Daily Purchase</h4>
          <ResponsiveContainer width="100%" height={450}>
            <BarChart data={barChart}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="gray" />
              <Bar dataKey="uv" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;

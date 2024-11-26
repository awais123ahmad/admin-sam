import React, { useState } from "react";
import { FaArrowUp, FaDollarSign, FaWallet } from "react-icons/fa";
import { MdCreditScore, MdOutlineAutoGraph } from "react-icons/md";
import "./Style.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
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

const data = [
  {
    amount: "5,000",
    name: "Today Revenue",
    icon: RiExchangeDollarLine,
    iconColor: "#F7B229",
    bgColor: "#F9EFE1",
  },
  {
    amount: "5,000",
    name: "Today Profit",
    icon: FaDollarSign,
    iconColor: "#6356FD",
    bgColor: "#E2EDFD",
  },
  {
    amount: "5,000",
    name: "Today Sales",
    icon: FaWallet,
    iconColor: " #66DAFB ",
    bgColor: "#E2F7FB",
  },
  {
    amount: "5,000",
    name: "This Month Revenue",
    icon: FaSackDollar,
    iconColor: " #EF70B2 ",
    bgColor: "#E7EBF2",
  },
  {
    amount: "5,000",
    name: "This Month Profit",
    icon: FaMoneyCheckDollar,
    iconColor: " #F56C22 ",
    bgColor: "#FCEFE8",
  },
  {
    amount: "5,000",
    name: "This Month Sales",
    icon: MdOutlineAutoGraph,
    iconColor: " #34B237 ",
    bgColor: "#DBF7E1",
  },
  // { amount: '5,000', name: 'Total Revenue', icon: FaDollarSign, iconColor: ' #A856FC ', bgColor: '#EBF0FD' },
  // { amount: '5,000', name: 'Total Revenue', icon: FaDollarSign, iconColor: ' #F9BF7D ', bgColor: '#F7F1F4' }
];

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
const chart = [
  { name: "1", uv: 15.5, pv: 24, amt: 24 },
  { name: "2", uv: 20, pv: 24, amt: 24 },
  { name: "3", uv: 12, pv: 24, amt: 24 },
  { name: "4", uv: 24, pv: 24, amt: 24 },
  { name: "5", uv: 36, pv: 24, amt: 24 },
  { name: "6", uv: 17, pv: 24, amt: 24 },
  { name: "2", uv: 40, pv: 24, amt: 24 },
  { name: "3", uv: 10, pv: 24, amt: 24 },
  { name: "4", uv: 2, pv: 24, amt: 24 },
  { name: "5", uv: 25, pv: 24, amt: 24 },
  { name: "6", uv: 10, pv: 24, amt: 24 },
  { name: "4", uv: 24, pv: 24, amt: 24 },
  { name: "5", uv: 36, pv: 24, amt: 24 },
  { name: "6", uv: 17, pv: 24, amt: 24 },
  { name: "2", uv: 40, pv: 24, amt: 24 },
  { name: "3", uv: 10, pv: 24, amt: 24 },
  { name: "4", uv: 2, pv: 24, amt: 24 },
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
      <text  y={'96%'} x={cx} dx={-40} style={{ fontSize:18  }} >
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

  const [price , setPrice] = useState('');

  return (
    <div>
      <div className=" flex max-md:flex-col gap-[2%] ">
        <div className="w-[70%] max-md:w-[100%] ">
          <div className="grid grid-cols-3 gap-[20px] max-md:grid-cols-2 max-md:gap-[40px]">
            {data?.map((value) => (
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
                    backgroundColor: value.bgColor,
                    alignItems: "center",
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  className="py-2"
                >
                  {<value.icon size={29} color={value.iconColor} />}
                </div>
                <div className="py-6">
                  <p style={{ fontSize: 20, fontWeight: "600" }}>
                    Rs.{value?.amount}
                  </p>
                  <p
                    style={{
                      fontSize: 14,
                      marginTop: -8,
                      fontWeight: "500",
                      color: "gray",
                    }}
                  >
                    {value?.name}
                  </p>
                </div>
              </div>
            ))}
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
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                data={chart}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="90%" stopColor="#3F99F2" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                {/* <CartesianGrid strokeDasharray="1 1" /> */}
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#3F99F2"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)", padding: 10 }}
          className="invoice"
        >
          <h4 className="py-2 font-[600]">Recent Invoices</h4>
          <div className="recent" style={{}}>
            {recent?.map((item) => (
              <div className="rounded-lg bg-white flex items-center mx-auto mt-4 border-l-4 border-green-500 shadow-md">
                <div className="flex flex-row p-2  w-full items-center">
                  <div className="mt-[4px] w-full">
                    <div className="flex justify-between">
                      <h1 className="text-gray-500 text-sm font-[600] ">
                        {item?.date}
                      </h1>
                      <h1 className="text-gray-500 font-[600] text-sm">
                        invoice # {item?.id}
                      </h1>
                    </div>
                    <p className="text-gray-500 my-[2px] font-[500] text-sm">{item?.name}</p>
                    <div className="flex justify-between ">
                      <div className=" text-white bg-green-500 rounded-lg text-xs py-1 px-2 w-16 text-center">
                        {item?.status}
                      </div>
                      <span className="text-red-500 font-bold ">
                        Rs.{item?.amount}
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
                        <p className="font-[500] text-sm text-gray-600">{item?.date}</p>
                        <p className="text-gray-500">CASH</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[15px] font-[600] text-gray-600">{item?.name}</p>
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
                        <p className="font-[500] text-sm text-gray-600">{item?.date}</p>
                        <p className="text-gray-500">CASH</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[15px] font-[600] text-gray-600">{item?.name}</p>
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

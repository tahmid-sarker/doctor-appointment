import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip, Legend } from "recharts";

const getPath = (x, y, width, height) =>
  `M${x}, ${y + height}
   C${x + width / 3}, ${y + height} ${x + width / 2}, ${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2}, ${y + height / 3} ${x + (2 * width) / 3}, ${y + height} ${x + width}, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Define fee-color mapping ranges (600 to 1200 divided into 6 ranges)
const feeColorRanges = [
  { min: 600, max: 699, color: "#d0ed57" },     // light green
  { min: 700, max: 799, color: "#a5de63" },     // lime green
  { min: 800, max: 899, color: "#8dd1e1" },     // sky blue
  { min: 900, max: 999, color: "#ffc658" },     // yellow-orange
  { min: 1000, max: 1099, color: "#ff8042" },   // orange
  { min: 1100, max: Infinity, color: "#B32624" },   // red
];

// Function to return color based on fee value
const getColorByFee = (fee) => {
  const range = feeColorRanges.find((rangeNumber) => fee >= rangeNumber.min && fee <= rangeNumber.max);
  return range ? range.color : "#8884d8";
};

const Rechart = ({ appointedDoctors }) => {
  return (
    <div className="bg-white p-4 w-full h-[350px] md:h-[450px] rounded-lg shadow-md">
      {/* Make chart responsive to container size */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={appointedDoctors} margin={{ top: 20, right: 20, left: 20, bottom: 80 }}>
          {/* X axis with rotated name labels */}
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} tick={{ fontSize: 12 }} />
          {/* Y axis with fixed domain */}
          <YAxis />
          {/* Show tooltip on hover */}
          <Tooltip />
          {/* Bar with custom triangle shape and colored cells */}
          <Bar dataKey="fee" shape={<TriangleBar />} name="Consultation Fee">
            {appointedDoctors.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColorByFee(entry.fee)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
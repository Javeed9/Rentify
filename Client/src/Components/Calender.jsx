import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
    className='border border-black text-center'
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      isClearable
      placeholderText="Select A Date!"
    />
  );
}

export default Calender
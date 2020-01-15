import React, { useState, Fragment } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerEnd = () => {
    const [startDate] = useState(new Date("2020/01/01")); // just in case add setStartDate
    const [endDate, setEndDate] = useState(new Date("2020/01/01"));
    return (
        <Fragment>
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
            />
        </Fragment>
    )
}


export default DatePickerEnd;
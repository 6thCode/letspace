import React, { useState, Fragment } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerStart  = () => {
    const [startDate, setStartDate] = useState(new Date("2020/01/01"));
    const [endDate] = useState(new Date("2020/01/01")); // just in case add setEndDate
    return (
        <Fragment>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
            />

        </Fragment>
    )
}

export default DatePickerStart;
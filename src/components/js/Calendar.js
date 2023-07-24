import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <h2>Select a Date:</h2>
            <DatePicker
                showIcon
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
            />
        </div>
    );
};

export default Calendar;


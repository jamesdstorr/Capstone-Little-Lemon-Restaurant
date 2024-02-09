import React from 'react';



const DatePicker = (props) => {
    const today = new Date();
    const availableDates = [];

   const style = {
       date_picker: {
           padding: "10px",
           borderRadius: "5px",
           border: "1px solid #ccc",
           fontFamily: "Karla",
       }
    }

    const handleDateChange = (e) => {
        props.setDate(new Date(e.target.value));
    }


    for (let i = 0; i < 7; i++) {
        const newDate = new Date(today);
        newDate.setDate(newDate.getDate() + i);
        availableDates.push(newDate);
    }

    return (
        <>
        <select defaultValue="" style={style.date_picker} onChange={handleDateChange} aria-label="Date Selector">
        <option value="" disabled>Select a date</option>
            {availableDates.map((date, index) => {
                return (
                    <option key={index} value={date}>{date.toDateString()} </option>
                );
            })}
        </select>
        </>
    );
}

export default DatePicker;
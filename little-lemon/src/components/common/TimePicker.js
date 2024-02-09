const TimePicker = (props) => {
  
  const style = {
    borderRadius: "5px",
    padding: "5px",
  }
  
  const availableTimes = props.availableTimes.availableTimes;
  const handleChange = (e) => {
    props.setReservation(current =>({
        ...current,
        time: e.target.value,
    }))
  };

  return (
    <select defaultValue="" onChange={handleChange} style={style} aria-label="Time Selector">
      <option value="" disabled>
        Select a Time
      </option>
      {availableTimes.map((time) => (
        <option value={time}>{time}</option>
      ))}
    </select>
  );
};

export default TimePicker;

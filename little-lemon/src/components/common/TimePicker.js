const TimePicker = (props) => {

  const style = {
    borderRadius: "5px",
    padding: "5px",
  }
  const handleChange = (e) => {
    props.setReservation(current =>({
        ...current,
        time: e.target.value,
    }))
  };

  return (
    <select
    defaultValue=""
    onChange={handleChange}
    style={style}
    aria-label="Time Selector"
    id="time"
    disabled = {props.availableTimes.availableTimes.length === 0}
    >
      <option value="" disabled>
        Select a Time
      </option>
      {props.availableTimes.availableTimes.map((time) => (
        <option value={time}>{time}</option>
      ))}
    </select>
  );
};

export default TimePicker;

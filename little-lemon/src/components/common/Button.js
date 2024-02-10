const Button = ({onClick, children, type="button", name=""}) => {
  const primary_button = {
      backgroundColor: "#F4CE14",
      color: "black",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "20px",
      fontWeight: "bold",
      fontFamily:"Karla",
      width: "auto",
      minWidth: "50px",
      maxWidth: "200px",
      marginTop: "20px",
    }

  return (
    <button style={primary_button} onClick={onClick} type={type} name={name}>
      {children}
    </button>
  )
};

export default Button;
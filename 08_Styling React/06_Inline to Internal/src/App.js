import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form
        style={styles.form}
      >
        <h3 style={styles.sign}>Sign Up</h3>
        <input style={styles.input} placeholder="Username" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" />
        <div
          style={styles.pass}
        >
          <button
            style={styles.butt}
          >
            Cancel
          </button>
          <button
            style={styles.butt}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}



const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  sign: {
    fontSize: "2rem",
    letterSpacing: 2
  },
  input: { padding: 10 },
  pass: {

    display: "flex",
    justifyContent: "center",
    gap: 20

  },
  butt:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }


}
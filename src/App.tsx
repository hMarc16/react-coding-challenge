import "./App.css";
import Element from "./Element";
import Fields from "./Fields";

function App() {
  const INITIAL_ELEMENTS = [
    { title: "Bob" },
    { title: "Bob the Last Name" },
    { title: "1110011100" },
    { title: "Alice" },
    { title: "ba@gmail.com" },
    { title: "xasdfw@yahoo.com" },
    { title: "Bean" },
    { title: "Charlie" },
    { title: "McNemara" },
    { title: "myUniveristy@mail.edu" },
    { title: "19981032201" },
  ];

  const handleSubmit = () => {
    alert("Form Submited!")
  }

  return (
    <>
      <div className="element-tray">
        {INITIAL_ELEMENTS.map((element, i) => (
          <Element key={i} element={element} />
        ))}
      </div>
      <div className="form-canvas">
        <div className="form-title">Sign up</div>
        <Fields input={"First Name"}/>
        <Fields input={"Last Name"}/>
        <Fields input={"Email Address"}/>
        <Fields input={"Phone Number"}/>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;

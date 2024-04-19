import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let Bday = () => {
  const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
  const [inputText, setInputText] = useState("");
  let [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { startDate, inputText }]);
    console.log(data, "----");
  };
  return (
    <>
      <section className="body">
        <section className="container">
          <h1>Birthday Records</h1>
          <section className="inputs">
            <div>
              <label>Name</label>
              <input
                type="text"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
              ></input>
            </div>
            <div className="date">
              <label>D-O-B</label>
              <DatePicker
                className="values"
                selected={startDate}
                format="dd-MM-yyyy"
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </section>
          <button type="button" className="btn" onClick={addData}>
            Add Data
          </button>
          <section className="table">
            <table id="customers">
              {data.length === 0 ? null : (
                <>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>DOB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.inputText}</td>
                          <td>{item.startDate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </>
              )}
            </table>
          </section>
        </section>
      </section>
    </>
  );
};

export default Bday;

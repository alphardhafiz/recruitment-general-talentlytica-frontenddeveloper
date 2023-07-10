import React, { useState } from "react";

function App() {
  const [penilaian, setPenilaian] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });
  const [jsonOutput, setJsonOutput] = useState("");

  const handleInputChange = (aspek, mahasiswa, value) => {
    setPenilaian((prevState) => ({
      ...prevState,
      [aspek]: {
        ...prevState[aspek],
        [mahasiswa]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(penilaian, null, 2);
    setJsonOutput(jsonData);
  };

  const renderForm = () => {
    const aspekPenilaian = [
      "aspek_penilaian_1",
      "aspek_penilaian_2",
      "aspek_penilaian_3",
      "aspek_penilaian_4",
    ];

    const mahasiswa = [
      "mahasiswa_1",
      "mahasiswa_2",
      "mahasiswa_3",
      "mahasiswa_4",
      "mahasiswa_5",
      "mahasiswa_6",
      "mahasiswa_7",
      "mahasiswa_8",
      "mahasiswa_9",
      "mahasiswa_10",
    ];

    return (
      <form onSubmit={handleSubmit} className="form-penilaian">
        {aspekPenilaian.map((aspek) => (
          <div className="aspek-penilaian" key={aspek}>
            <h3>{aspek}</h3>
            {mahasiswa.map((mhs) => (
              <div key={mhs}>
                <label htmlFor={mhs}>{mhs}:</label>
                <input
                  type="number"
                  id={mhs}
                  name={mhs}
                  min="1"
                  max="10"
                  onChange={(e) =>
                    handleInputChange(aspek, mhs, e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    );
  };

  return (
    <div>
      <h1>Penilaian Mahasiswa</h1>
      {renderForm()}
      <h2>JSON Output:</h2>
      <pre>{jsonOutput}</pre>
    </div>
  );
}

export default App;

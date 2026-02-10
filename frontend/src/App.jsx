import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("http://13.126.242.155:5000/api/count")
      .then(res => setCount(res.data.count))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 DevOps Visitor Counter</h1>
      <h2>Total Visitors:</h2>
      <h1>{count}</h1>
    </div>
  );
}

export default App;

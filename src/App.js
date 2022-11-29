import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Home";
import { Register } from "./NewEmployeeForm";
import { ViewSlips } from "./Slips";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { NewPaySlip } from "./NewSlip";


function App() {
  return (
    <>
    <BrowserRouter>
      <Homepage/>
      <Routes>
        <Route path="create" exact element={<Register/>} />
        <Route path="view" exact element={<ViewSlips/>} />
        <Route path="newslip" exact element={<NewPaySlip/>} />
        {/* <Route path="hi" exact element={<h1>First element</h1>} />
        <Route path="hai" exact element={<h1>Second element</h1>} />
        <Route path="hey" exact element={<h1>Third element</h1>} />
        <Route path="hello" exact element={<h1>Fourth element</h1>} /> */}
      </Routes>
    </BrowserRouter>
    {/* <Register/> */}
    </>
  );
}

export default App;

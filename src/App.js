import logo from './logo.svg';
import './App.css';
import MyForm from "./my-form";
import {MyFormProvider} from "./my-form-context";

function App() {
  return (
    <div className="App">
        <MyFormProvider><MyForm /></MyFormProvider>
    </div>
  );
}

export default App;

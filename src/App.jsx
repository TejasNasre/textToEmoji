import { FaArrowRightLong } from "react-icons/fa6";
import "./App.css";
import Switch from "./components/Switch/Switch";
import Input from "./components/Input/Input";
export default function App() {
  return (
    <>
      <div className="heading">
        <h1>
          Text
          <span className="arrow">
            <FaArrowRightLong />
          </span>
          Emoji
        </h1>
      </div>
      <Switch/>
      <Input />
    </>
  );
}

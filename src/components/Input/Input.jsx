import Btn from "../Btn/Btn";
import { FaLock ,FaLockOpen } from "react-icons/fa";
export default function Input() {
  return (
    <>
      <div className="input">
        <label htmlFor="message">1.Type A Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Hello World Or Write Some JavaScript Code"
        ></textarea>
        <label htmlFor="password">Set A Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Eg.1234"/>
          <label htmlFor="encrypt">Encrypt</label>
          <Btn icon={<FaLock/>} btnTitle="Encrypt Text"/>
      </div>
    </>
  );
}

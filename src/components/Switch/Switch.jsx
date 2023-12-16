import { FaLock ,FaLockOpen } from "react-icons/fa";
import Btn from "../Btn/Btn";

export default function Switch() {
  return (
    <>
      <div className="switch">
        <div className="enc">
            <Btn icon={<FaLock/>} btnTitle="Encrypt Text"/>
        </div>
        <div className="dnc">
            <Btn icon={<FaLockOpen/>} btnTitle="Decrypt Emoji"/>
        </div>
      </div>
    </>
  );
}

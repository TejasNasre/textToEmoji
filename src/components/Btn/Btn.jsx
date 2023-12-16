export default function Btn({icon,btnTitle}) {
  return (
    <>
      <div className="btn">
        <span>
          {icon}
        </span>
        <h3>{btnTitle}</h3>
      </div>
    </>
  );
}

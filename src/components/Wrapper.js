export default function Wrapper(props) {
  return (
    <div
      style={{
        background: "lightgreen",
        width: "400px",
        padding: "10px",
        margin: "5px auto",
      }}
    > {props.wrapper} </div>
  );
}

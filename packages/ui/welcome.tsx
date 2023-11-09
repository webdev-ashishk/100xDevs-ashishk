export function Welcome({ doc }): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "2xl solid red",
        color: "blue",
      }}
    >
      <h1>welcome to DOC value: {doc} </h1>
    </div>
  );
}

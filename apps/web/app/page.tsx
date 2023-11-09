import { Welcome } from "ui";
function Page(): JSX.Element {
  const value = "Welcome to Aswesome place !";
  return (
    <div>
      <Welcome doc={value} />
    </div>
  );
}
export default Page;

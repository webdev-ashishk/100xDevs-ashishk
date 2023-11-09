import { Welcome } from "ui";

export default function Page(): JSX.Element {
  const value = 1000;
  return (
    <main>
      <Welcome doc={value} />
    </main>
  );
}

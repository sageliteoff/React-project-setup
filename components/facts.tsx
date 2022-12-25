import { Fact as FactEntity } from "../respositories/fact-repository";

export default function Fact({ fact }: { fact: FactEntity }) {
  return (
    <>
      <p>{fact.text}</p>
    </>
  );
}

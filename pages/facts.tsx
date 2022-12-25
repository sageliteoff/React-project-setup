import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import Fact from "../components/facts";
import DI from "../di-container";
import { RootState } from "../store";

export default function Posts() {
  const fact = useSelector((state: RootState) => state.fact.fact);
  return (
    <main className="page">
      <div className="d-flex align-items-center justify-content-center flex-column h-100">
        <Button onClick={() => DI.factService.getFact()}>
          Generate Random Fact
        </Button>

        <div className="mt-4">
          <Fact fact={fact} />
        </div>
      </div>
    </main>
  );
}

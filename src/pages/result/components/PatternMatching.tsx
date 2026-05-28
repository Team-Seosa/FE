import type { Pattern } from "@/types/uibowl";
import PatternRow from "./PatternRow";

interface PatternMatchingProps {
  patterns: Pattern[];
}

const PatternMatching = ({ patterns }: PatternMatchingProps) => (
  <div>
    <h2 className="t-h2 text-text-primary">패턴 매칭</h2>
    <div className="t-caption mt-1 text-text-tertiary">신뢰도 순 Top-3</div>
    <div className="mt-6 flex flex-col gap-4">
      {patterns.map((p, i) => (
        <PatternRow key={p.rank} pattern={p} delayMs={240 + i * 100} />
      ))}
    </div>
  </div>
);

export default PatternMatching;

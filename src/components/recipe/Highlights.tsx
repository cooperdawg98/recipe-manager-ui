import type { BulletedInfo } from "../../types/recipe/BulletedInfo";

type HighlightsProps = {
  highlights: BulletedInfo[];
};

const Highlights = ({ highlights }: HighlightsProps) => {
  return (
    <div className="flex bg-mint-leaf-200 rounded-md p-4">
      <ul className="list-disc list-inside space-y-1 marker:text-verdigris-800 marker:text-xl text-lg">
        {highlights.map((h, idx) => (
          <li key={idx}>{h.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Highlights;

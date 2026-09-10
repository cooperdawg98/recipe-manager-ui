import { Button } from "@base-ui/react";
import { useRef, useState } from "react";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import ChevronUpIcon from "../assets/icons/ChevronUpIcon";
import { useIsOverflow } from "../utils/useIsOverflow";

type CollapsibleParagraphProps = {
  value: string;
};

const CollapsibleParagraph = ({ value }: CollapsibleParagraphProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isOverflowing = useIsOverflow(textRef);

  // BUG: When closed, the down arrow disappears briefly, causing judder
  // This happens because isCollapsed is changed before isOverflowing
  return (
    <div className="flex flex-col items-center">
      <p ref={textRef} className={isCollapsed ? "line-clamp-2" : ""}>
        {value}
      </p>
      <Button
        className="cursor-pointer transition delay-50 duration-200 ease-in-out hover:scale-125 "
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        {isCollapsed ? isOverflowing && <ChevronDownIcon /> : <ChevronUpIcon />}
      </Button>
    </div>
  );
};

export default CollapsibleParagraph;

import { useState, useLayoutEffect } from "react";

// TODO: Make prop type generic
export const useIsOverflow = (
  ref: React.RefObject<HTMLParagraphElement | null>
) => {
  const [isOverflow, setIsOverflow] = useState(false);

  // Warning this hook is entirely copied from Google, if it breaks you can tell me you told me so

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkOverflow = () => {
      // Horizontal check (e.g. white-space: nowrap)
      const hasHorizontalOverflow = element.scrollWidth > element.clientWidth;

      // Vertical check (e.g. line-clamp / multi-line overflow)
      const hasVerticalOverflow = element.scrollHeight > element.clientHeight;

      setIsOverflow(hasHorizontalOverflow || hasVerticalOverflow);
    };

    // Trigger initial check after component mounts
    checkOverflow();

    // Monitor size changes to recalculate overflow state dynamically
    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return isOverflow;
};

import { Button } from "@base-ui/react/button";
import ExternalLink from "../ExternalLink";

type TagItemProps = {
  label: string;
  link?: string;
};

const TagItem = ({ label, link }: TagItemProps) => {
  // TODO: Make tag price tag shaped styling
  return (
    <ExternalLink url={link}>
      <Button className="flex h-8 items-center justify-center gap-2 rounded-2xl border border-chocolate-plum-950 bg-chocolate-plum-100 px-3 text-md leading-none whitespace-nowrap font-normal text-chocolate-plum-950 select-none hover:not-data-disabled:bg-chocolate-plum-50 active:not-data-disabled:bg-neutral-200 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950 data-disabled:border-neutral-500 data-disabled:text-neutral-500 disabled:border-neutral-500 disabled:text-neutral-500">
        {label}
      </Button>
    </ExternalLink>
  );
};

export default TagItem;

type ExternalLinkProps = {
  url: string;
  children: React.ReactNode;
};

// TODO: Disable if url is undefined or ""

const ExternalLink = ({ url, children }: ExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;

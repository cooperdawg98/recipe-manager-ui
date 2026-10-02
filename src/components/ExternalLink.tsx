type ExternalLinkProps = {
  url?: string;
  children: React.ReactNode;
};

const ExternalLink = ({ url, children }: ExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;

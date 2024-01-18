import OrganizationControl from "./_components/org-control";

const OragnizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};

export default OragnizationIdLayout;

import Navigation from "../Navigation";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
};

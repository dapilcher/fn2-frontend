import Sidebar from "./Sidebar";

const LayoutWithSidebar = ({children}) => {
  return (
    <div className="flex flex-col gap-4 xl:grid xl:grid-cols-12 flex-1">
      <section className="flex flex-col items-center justify-start col-span-9">
        {children}
      </section>
      <Sidebar />
    </div>
  );
};

export default LayoutWithSidebar;
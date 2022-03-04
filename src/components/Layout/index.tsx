import "./index.css";
const DefaultLayout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="default-layout-background">
      <div className="default-layout-flex">
        <div className="default-layout-box">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;

import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const steps = [
    { path: "/", label: "Step 1" },
    { path: "/step2", label: "Step 2" },
    { path: "/step3", label: "Step 3" },
    { path: "/step4", label: "Step 4" },
    { path: "/result", label: "Result" },
  ];

  return (
    <div className="sidebar">
      <ul>
        {steps.map((step) => (
          <li
            key={step.path}
            className={location.pathname === step.path ? "active" : ""}
          >
            <Link to={step.path}>{step.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

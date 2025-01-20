import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <ul
          style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/player">Player</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

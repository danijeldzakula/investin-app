import { NavLink, Outlet } from "react-router-dom";
import Layout from "../layouts";

function Home() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1>Home</h1>

          <NavLink to="/">
            <span>Home</span>
          </NavLink>

          <NavLink to="/messages">
            <span>Messages</span>
          </NavLink>

          <NavLink to="/notifications">
            <span>Notifications</span>
          </NavLink>

          <Outlet />
        </div>
      </section>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1>About</h1>
        </div>
      </section>
    </Layout>
  );
}

function NotFound() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1>Not Found Error</h1>
        </div>
      </section>
    </Layout>
  );
}

function Messages(props) {
  const { name } = props;
  return (
    <div className="outlet">
      <h1>{name}</h1>
      <Outlet />
    </div>
  );
}

const route = [
  {
    path: "/",
    label: "Home",
    element: <Home />,
    children: [
      {
        path: "/messages",
        label: "Messages",
        element: <Messages name="Messages" />,
      },
      {
        path: "/notifications",
        label: "Notifications",
        element: <Messages name="Notifications" />,
      },
    ],
  },
  {
    path: "/about",
    label: "About",
    element: <About />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { route };

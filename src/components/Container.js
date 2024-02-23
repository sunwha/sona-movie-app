import { Link, useLocation } from "react-router-dom";

function Contianer({ children }) {
  const location = useLocation();
  return (
    <div>
      <div className="w-3/5 mx-auto py-10">
        <header className="bg-red-600 px-5 py-5 text-white relative">
          <h1 className="font-mono text-xl font-extrabold">Sona Movie App</h1>
          {location.pathname !== "/" ? (
            <Link
              to={`${process.env.PUBLIC_URL}/`}
              className="absolute top-6 right-5 border px-1 rounded"
            >
              Home
            </Link>
          ) : null}
        </header>
        <div className="bg-slate-700 text-white">{children}</div>
      </div>
    </div>
  );
}

export default Contianer;

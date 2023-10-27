import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
      <p className="text-2xl font-medium text-gray-600 mb-6">
        Página no encontrada
      </p>
      <Link
        to="/"
        className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out">
        Inicio
      </Link>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">

      <div className="w-full max-w-xl bg-white p-10 rounded-2xl shadow-md text-center">

        {/* Big 404 */}
        <h1 className="text-7xl md:text-9xl font-bold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-600 mt-3 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-primary transition-colors"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
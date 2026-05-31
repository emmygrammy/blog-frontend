export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-3">

        {/* spinner */}
        <div className="w-10 h-10 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>

        {/* text */}
        <h2 className="text-gray-600 text-sm">
          {text}
        </h2>

      </div>
    </div>
  );
}
function DeleteModal({
  isOpen,
  title = "Delete Item",
  message = "Are you sure you want to delete this item?",
  onConfirm,
  onClose,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl">

        <h2 className="text-xl font-bold text-red-600 mb-3">
          {title}
        </h2>

        <p className="text-gray-600 mb-6">
          {message}
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;
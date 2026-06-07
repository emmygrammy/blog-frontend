
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useBlog,
  useUpdateBlog,
  useUpdateBlogImage,
} from "../../hooks/UseBlog";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, isLoading, error } = useBlog(id);

  const updateBlogMutation = useUpdateBlog();
  const updateImageMutation = useUpdateBlogImage();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);

  // ✅ SAFE WAY: useEffect instead of setState in render
  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || "",
        content: blog.content || "",
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (!image) return alert("Please select an image");

    const fd = new FormData();
    fd.append("image", image);

    await updateImageMutation.mutateAsync({
      id,
      data: fd,
    });

    alert("Image updated successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateBlogMutation.mutateAsync({
      id,
      data: formData,
    });

    alert("Blog updated successfully");
    navigate("/dashboard/manage");
  };

  if (isLoading) return <p className="p-6">Loading...</p>;

  if (error)
    return <p className="p-6 text-red-500">Failed to load blog</p>;

  return (
    <div className="max-w-4xl  p-6">

      <h1 className="text-3xl font-bold text-secondary mb-6 font-heading">
        {blog?.title || "Untitled"}
      </h1>

      {/* ================= IMAGE ================= */}
      <div className="mb-6">
        <p className="font-medium mb-4 font-heading text-xl">
          Update Image
        </p>

        {blog?.image?.url && (
          <img
            src={blog.image.url}
            alt="blog"
            className="w-full h-60 object-cover rounded mb-3"
          />
        )}

        <input
          className="w-full border p-3 rounded font-heading"
          type="file"
          onChange={handleImageChange}
        />

        <button
          type="button"
          onClick={handleImageUpload}
          className="mt-2 bg-primary text-white px-4 py-2 rounded font-heading"
        >
          Upload Image
        </button>
      </div>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 font-medium font-heading text-xl">
            Title
          </label>

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium font-heading text-xl">
            Content
          </label>

          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows={10}
            className="w-full border p-3 rounded"
          />
        </div>

        <button
          disabled={updateBlogMutation.isPending}
          className="bg-primary text-white px-6 py-3 rounded"
        >
          {updateBlogMutation.isPending
            ? "Updating..."
            : "Update Blog"}
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
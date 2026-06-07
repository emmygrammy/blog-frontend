
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useBlog,
  useUpdateBlog,
  useUpdateBlogImage,
} from "../../hooks/UseBlog";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useBlog(id);
  const blog = data;
  

  const updateBlogMutation = useUpdateBlog();
  const updateImageMutation = useUpdateBlogImage();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [image, setImage] = useState(null);
  

  // ✅ SAFE WAY: useEffect instead of setState in render
  
  useEffect(() => {
  if (!data) return;

  setFormData({
    title: data.title ?? "",
    content: data.content ?? "",
  });
}, [data]);

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
    if (!image) return toast.error("Please select an image");

    const fd = new FormData();
    fd.append("image", image);

    await updateImageMutation.mutateAsync({
      id,
      data: fd,
    });

    toast.success("Image updated successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateBlogMutation.mutateAsync({
      id,
      data: formData,
    });

    toast.success("Blog updated successfully");
    navigate("/dashboard/manage");
  };

  if (isLoading) return <Loader title="Loading..." />;

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
          disabled={updateImageMutation.isPending}
          className="mt-2 bg-primary text-white px-4 py-2 rounded flex items-center gap-2 disabled:opacity-50"
        >
          {updateImageMutation.isPending && <Spinner />}
          {updateImageMutation.isPending
            ? "Uploading..."
            : "Upload Image"}
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
          type="submit"
          className="bg-primary font-normal font-heading text-white px-6 py-3 rounded flex items-center gap-2 disabled:opacity-50"
        >
          {updateBlogMutation.isPending?(
            <>
            <Spinner />
            Updating...
            </>
          ):(
            "Update Blog"
          )}
          
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
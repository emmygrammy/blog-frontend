// import { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useBlog, useUpdateBlog } from "../../hooks/UseBlog";

// function EditBlog() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { data: blog, isLoading, error } = useBlog(id);
//   const updateBlogMutation = useUpdateBlog();

//   // ✅ Initialize only once when blog exists
//   const [formData, setFormData] = useState(() => ({
//     title: "",
//     content: "",
//   }));

//   // 🔥 hydrate directly during render (safe pattern)
//   if (blog && formData.title === "") {
//     setFormData({
//       title: blog.title || "",
//       content: blog.content || "",
//     });
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await updateBlogMutation.mutateAsync({
//         id,
//         data: formData,
//       });

//       navigate("/dashboard/manage");
//     } catch (error) {
//       alert(error?.response?.data?.msg || "Update failed");
//     }
//   };

//   if (isLoading) {
//     return <p className="p-6">Loading blog...</p>;
//   }

//   if (error) {
//     return (
//       <p className="p-6 text-red-500">
//         Failed to load blog
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-4xl  px-2 py-4" >
//       <h1 className="text-2xl font-bold text-primary mb-6 font-heading">
//         Edit Blog 
//       </h1>

//       <form onSubmit={handleSubmit} className="space-y-5">

//         <div>
//           <label className="block mb-2 font-medium font-heading text-xl ">
//             Blog Title
//           </label>

//           <input
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full border p-3 rounded-lg"
//             placeholder="Enter title"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-2 font-medium font-heading text-xl ">
//             Blog Content
//           </label>

//           <textarea
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             rows={10}
//             className="w-full border p-3 rounded-lg"
//             placeholder="Write content..."
//             required
//           />
//         </div>

//         <button
//           disabled={updateBlogMutation.isPending}
//           className="bg-primary text-white px-6 py-3 rounded-sm font-semibold font-heading"
//         >
//           {updateBlogMutation.isPending
//             ? "Updating..."
//             : "Update Blog"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditBlog;



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
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-primary mb-6">
        Edit Blog 🚀
      </h1>

      {/* ================= IMAGE ================= */}
      <div className="mb-6">
        <p className="font-medium mb-2">Update Image</p>

        {blog?.image?.url && (
          <img
            src={blog.image.url}
            alt="blog"
            className="w-40 h-40 object-cover rounded mb-3"
          />
        )}

        <input type="file" onChange={handleImageChange} />

        <button
          type="button"
          onClick={handleImageUpload}
          className="mt-2 bg-black text-white px-4 py-2 rounded"
        >
          Upload Image
        </button>
      </div>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 font-medium">
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
          <label className="block mb-2 font-medium">
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
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import { createBlog, uploadBlogImage } from "../../api/BlogApi";
import { createQuestion } from "../../api/cbtApi";

export default function CreateBlog() {
  const [activeForm, setActiveForm] = useState("");

  return (
    <div>
      <div className="flex  flex-start items-center gap-3">
        <Button
          onClick={() => setActiveForm("news")}
          className="bg-blue-950 text-white px-3 py-2 rounded-sm max-w-sm hover:bg-primary"
        >
          Create News Blog
        </Button>

        <Button
          onClick={() => setActiveForm("cbt")}
          className="bg-secondary text-white px-3 py-2 rounded-sm max-w-sm  hover:bg-primary"
        >
          Create CBT Question
        </Button>
      </div>

      <div className="mt-10">
        {activeForm === "news" && <CreateNewsBlog />}
        {activeForm === "cbt" && <CreateCbtBlog />}
      </div>
    </div>
  );
}

/* =========================
   NEWS BLOG FORM
========================= */
function CreateNewsBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const blog = await createBlog({
        title,
        content,
      });

      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await uploadBlogImage(blog._id, formData);
      }

      alert("Blog created successfully");

      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to create blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-5">Create News Blog</h1>

      <Input
        placeholder="News title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-3 mb-4"
      />

      <textarea
        placeholder="News content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border-2 w-full p-3 rounded mb-4"
      />

      <Input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
      />

      <button className="bg-primary text-white px-5 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

/* =========================
   CBT QUESTION FORM
========================= */
function CreateCbtBlog() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [explanation, setExplanation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔥 VALIDATION (prevents backend 400 error)
      if (
        !question ||
        !optionA ||
        !optionB ||
        !optionC ||
        !optionD ||
        !correctAnswer
      ) {
        alert("Please fill all required fields");
        return;
      }

      const payload = {
        question,
        options: {
          A: optionA,
          B: optionB,
          C: optionC,
          D: optionD,
        },
        correctAnswer,
        explanation,
      };

      await createQuestion(payload);

      alert("Question created successfully");

      // reset form
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectAnswer("");
      setExplanation("");
    } catch (error) {
      console.log(error.response?.data);
      alert(error.response?.data?.message || "Failed to create question");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-xl">
      <h1 className="text-2xl font-bold mb-5">Create CBT Question</h1>

      <textarea
        placeholder="Enter Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border-2 w-full p-3 rounded mb-4"
        rows={4}
      />

      <Input
        placeholder="Option A"
        value={optionA}
        onChange={(e) => setOptionA(e.target.value)}
        className="border w-full p-3 mb-3"
      />

      <Input
        placeholder="Option B"
        value={optionB}
        onChange={(e) => setOptionB(e.target.value)}
        className="border w-full p-3 mb-3"
      />

      <Input
        placeholder="Option C"
        value={optionC}
        onChange={(e) => setOptionC(e.target.value)}
        className="border w-full p-3 mb-3"
      />

      <Input
        placeholder="Option D"
        value={optionD}
        onChange={(e) => setOptionD(e.target.value)}
        className="border w-full p-3 mb-4"
      />

      {/* Correct Answer */}
      <select
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
        className="border w-full p-3 mb-4 rounded"
      >
        <option value="">Select Correct Answer</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
        <option value="C">Option C</option>
        <option value="D">Option D</option>
      </select>

      {/* Explanation */}
      <textarea
        placeholder="Explain the answer..."
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        className="border-2 w-full p-3 rounded mb-6"
        rows={4}
      />

      <button
        type="submit"
        className="bg-primary text-white px-5 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
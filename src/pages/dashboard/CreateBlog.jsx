import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {createBlog,uploadBlogImage} from "../../api/BlogApi";
import {createQuestion} from "../../api/cbtApi";




export default function CreateBlog() {

  const [activeForm, setActiveForm] = useState("");

  return (
    <div>

      <div className="flex items-center justify-start gap-3">

        <Button
          onClick={() => setActiveForm("news")}
          className="bg-blue-950 max-w-sm text-white text-sm px-3 py-2 rounded font-heading hover:bg-primary"
        >
          create news blog
        </Button>

        <Button
          onClick={() => setActiveForm("cbt")}
          className="bg-secondary text-white max-w-sm text-sm px-3 py-2 rounded font-heading hover:bg-primary"
        >
          create CBT blog
        </Button>

      </div>

      {/* SHOW FORMS */}

      <div className="mt-10">

        {activeForm === "news" && <CreateNewsBlog />}

        {activeForm === "cbt" && <CreateCbtBlog />}

      </div>

    </div>
  );
}



function CreateNewsBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create Blog
      const blog = await createBlog({
        title,
        content,
      });

      // Upload image if selected
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        await uploadBlogImage(blog.post._id, formData);
      }

      alert("Blog created successfully");

      setTitle("");
      setContent("");
      setImage(null);

    } catch (error) {
      console.error(error);
      alert("Failed to create blog");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-xl"
    >
      <h1 className="text-2xl font-bold mb-5">
        Create News Blog
      </h1>

      <Input
        type="text"
        placeholder="News title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full p-3 rounded mb-4"
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="News description"
        className="border-2 w-full p-3 rounded-2xl mb-4 focus:border-primary focus:outline-none"
      />

      <Input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4"
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



//  
function CreateCbtBlog() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createQuestion({
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        answer,
      });

      alert("Question created successfully");

      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setAnswer("");

    } catch (error) {
      console.error(error);
      alert("Failed to create question");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-xl"
    >
      <h1 className="text-2xl font-bold mb-5">
        Create CBT Question
      </h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter Question"
        className="border-2 w-full p-3 rounded-2xl mb-4 focus:border-primary focus:outline-none"
        rows={4}
      />

      <Input
        type="text"
        placeholder="Option A"
        value={optionA}
        onChange={(e) => setOptionA(e.target.value)}
        className="border w-full p-3 rounded mb-3"
      />

      <Input
        type="text"
        placeholder="Option B"
        value={optionB}
        onChange={(e) => setOptionB(e.target.value)}
        className="border w-full p-3 rounded mb-3"
      />

      <Input
        type="text"
        placeholder="Option C"
        value={optionC}
        onChange={(e) => setOptionC(e.target.value)}
        className="border w-full p-3 rounded mb-3"
      />

      <Input
        type="text"
        placeholder="Option D"
        value={optionD}
        onChange={(e) => setOptionD(e.target.value)}
        className="border w-full p-3 rounded mb-4"
      />

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter Answer / Solution"
        className="border-2 w-full p-3 rounded-2xl mb-6 focus:border-primary focus:outline-none"
        rows={5}
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




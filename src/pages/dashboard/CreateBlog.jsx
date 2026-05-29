import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

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
  return (
    <div>
      <form className="bg-gray-100 p-6 rounded-xl">

        <h1 className="text-2xl font-bold mb-5">
          Create News Blog
        </h1>

        <Input
          type="text"
          placeholder="News title"
          className="border w-full p-3 rounded mb-4"
        />

        <textarea
          placeholder="News description"
          className="border-2 w-full p-3 rounded-2xl mb-4 focus:border-primary focus:outline-none"
        />

        <Input
          type="file"
          className="mb-4"
        />

        <Button className="bg-primary text-white px-5 py-2 rounded">
          Submit
        </Button>

      </form>
    </div>
  );
}



function CreateCbtBlog() {
  return (
    <div>
      <form className="bg-gray-100 p-6 rounded-xl">

        <h1 className="text-2xl font-bold mb-5">
          Create CBT Blog
        </h1>

        <Input
          type="text"
          placeholder="CBT title"
          className="border w-full p-3 rounded mb-4"
        />

        <textarea
          placeholder="CBT description"
          className="border-2 w-full p-3 rounded-2xl mb-4 focus:border-primary focus:outline-none"
        />

        <button className="bg-primary text-white px-5 py-2 rounded">
          Submit
        </button>

      </form>
    </div>
  );
}
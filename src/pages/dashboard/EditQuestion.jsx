import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../../components/Loader";
import Spinner from "../../components/Spinner";

import {
  useQuestion,
  useUpdateQuestion,
} from "../../hooks/UseQuestions";

function EditQuestion() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: question,
    isLoading,
    error,
  } = useQuestion(id);

  const updateQuestionMutation =
    useUpdateQuestion();

  const [formData, setFormData] = useState({
    question: "",
    options: {
      A: "",
      B: "",
      C: "",
      D: "",
    },
    correctAnswer: "",
    explanation: "",
  });

  useEffect(() => {
    if (!question) return;

    setFormData({
      question: question.question ?? "",

      options: {
        A: question.options?.A ?? "",
        B: question.options?.B ?? "",
        C: question.options?.C ?? "",
        D: question.options?.D ?? "",
      },

      correctAnswer:
        question.correctAnswer ?? "",

      explanation:
        question.explanation ?? "",
    });
  }, [question]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOptionChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateQuestionMutation.mutateAsync({
      id,
      data: formData,
    });

    navigate("/dashboard/manage?tab=cbt");
  };

  if (isLoading) {
    return (
      <Loader text="Loading question..." />
    );
  }

  if (error) {
    return (
      <div className="p-6 text-red-500">
        Failed to load question
      </div>
    );
  }

  return (
    <div className="max-w-4xl p-6">

      <h1 className="text-3xl font-bold mb-6 font-heading">
        Edit CBT Question
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        {/* Question */}
        <div>
          <label className="block mb-2 font-heading">
            Question
          </label>

          <textarea
            name="question"
            rows={4}
            value={formData.question}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
        </div>

        {/* Options */}
        <div className="grid gap-4">

          <input
            type="text"
            name="A"
            placeholder="Option A"
            value={formData.options.A}
            onChange={handleOptionChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="B"
            placeholder="Option B"
            value={formData.options.B}
            onChange={handleOptionChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="C"
            placeholder="Option C"
            value={formData.options.C}
            onChange={handleOptionChange}
            className="border p-3 rounded"
          />

          <input
            type="text"
            name="D"
            placeholder="Option D"
            value={formData.options.D}
            onChange={handleOptionChange}
            className="border p-3 rounded"
          />

        </div>

        {/* Answer */}
        <div>
          <label className="block mb-2 font-heading">
            Correct Answer
          </label>

          <select
            name="correctAnswer"
            value={formData.correctAnswer}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          >
            <option value="">
              Select Answer
            </option>

            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        {/* Explanation */}
        <div>
          <label className="block mb-2 font-heading">
            Explanation
          </label>

          <textarea
            name="explanation"
            rows={5}
            value={formData.explanation}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={
            updateQuestionMutation.isPending
          }
          className="bg-primary text-white px-6 py-3 rounded flex items-center gap-2 disabled:opacity-50"
        >
          {updateQuestionMutation.isPending ? (
            <>
              <Spinner />
              Updating...
            </>
          ) : (
            "Update Question"
          )}
        </button>

      </form>

    </div>
  );
}

export default EditQuestion;
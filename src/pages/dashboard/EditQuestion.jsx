
const [formData, setFormData] = useState({
  question: "",
  optionA: "",
  optionB: "",
  optionC: "",
  optionD: "",
  correctAnswer: "",
  explanation: "",
  subject: "",
  year: "",
});

useEffect(() => {
  if (question) {
    setFormData({
      question: question.question,
      optionA: question.options.A,
      optionB: question.options.B,
      optionC: question.options.C,
      optionD: question.options.D,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation || "",
      subject: question.subject || "",
      year: question.year || "",
    });
  }
}, [question]);


await updateQuestionMutation.mutateAsync({
  id,
  data: {
    question: formData.question,
    options: {
      A: formData.optionA,
      B: formData.optionB,
      C: formData.optionC,
      D: formData.optionD,
    },
    correctAnswer: formData.correctAnswer,
    explanation: formData.explanation,
    subject: formData.subject,
    year: Number(formData.year),
  },
});
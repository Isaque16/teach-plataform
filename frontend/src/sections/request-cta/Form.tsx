import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors = { email: "", message: "" };
    let isValid = true;

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email invalid";
      isValid = false;
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setEmail("");
      setMessage("");

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="w-full lg:w-2/5 mt-10" onSubmit={handleSubmit} noValidate>
      <fieldset className="flex flex-col">
        <label className="text-white text-lg my-4" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`bg-white text-black rounded-lg p-4 transition-all ${
            errors.email
              ? "border-2 border-red-500 ring-1 ring-red-500"
              : "border border-transparent"
          }`}
        />
        {errors.email && (
          <div
            id="email-error"
            className="flex items-center gap-2 text-red-300 text-sm mt-2"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z"
                clipRule="evenodd"
              ></path>
            </svg>
            {errors.email}
          </div>
        )}
      </fieldset>
      <fieldset className="flex flex-col">
        <label className="text-white text-lg my-4" htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="What are you say ?"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`bg-white text-black rounded-lg p-4 min-h-[120px] transition-all ${
            errors.message
              ? "border-2 border-red-500 ring-1 ring-red-500"
              : "border border-transparent"
          }`}
          required
        ></textarea>
        {errors.message && (
          <div
            id="message-error"
            className="flex items-center gap-2 text-red-300 text-sm mt-2"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z"
                clipRule="evenodd"
              ></path>
            </svg>
            {errors.message}
          </div>
        )}
      </fieldset>

      {submitSuccess && (
        <div role="alert" className="toast toast-top toast-end">
          <div role="status" className="alert alert-success">
            <span>
              Your request has been successfully submitted! We will contact you
              soon.
            </span>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex justify-self-center btn bg-dark-blue hover:bg-dark-blue/90 rounded-lg text-lg mt-8 py-7 px-10"
      >
        {isSubmitting ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          "Request Demo"
        )}
      </button>
    </form>
  );
}

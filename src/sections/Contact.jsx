import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const CONTACT_EMAIL = "mkrishna18.dev@gmail.com";
const TO_NAME = "Murali Krishna";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // EmailJS removed (no valid credentials provided).
      // Fallback: open user's email client with a pre-filled email.
      const subject = `Portfolio inquiry for ${TO_NAME}`;
      const body =
        `Hi ${TO_NAME},%0D%0A%0D%0A` +
        `Name: ${encodeURIComponent(formData.name)}%0D%0A` +
        `Email: ${encodeURIComponent(formData.email)}%0D%0A%0D%0A` +
        `${encodeURIComponent(formData.message)}%0D%0A%0D%0A` +
        `Sent from your portfolio contact form.`;

      const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;

      window.location.href = mailto;

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage(
        "success",
        "Message ready — your email app should open to send it."
      );
    } catch (error) {
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400">
            If you&apos;re looking to build data pipelines, analytics dashboards, or AI-powered applications
            (LLMs, NLP, automation), feel free to reach out — I&apos;m happy to collaborate or discuss roles.
          </p>
          <p className="text-sm text-neutral-500">
            Email: <span className="text-neutral-300">{CONTACT_EMAIL}</span>
          </p>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your goals, timeline, and what you want to build..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            disabled={isLoading}
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

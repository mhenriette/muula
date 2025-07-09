import Input from "../cards/Input";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Drawer from "../cards/Drawer";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    skill: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        setLoading(true);
        console.log("formData", formData);
        const response = await fetch("/api/advice", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            skill: formData.skill,
            message: formData.message,
          }),
        });
        if (!response.ok) throw new Error("Failed to send message");
        const data = await response.json();
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          skill: "",
          message: "",
        });
        setData(data.response);
        setShowDrawer(true);
      } catch (error) {
        setLoading(false);
        alert("Failed to send message: " + error);
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Career Advice",
        text: data,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(data);
    }
  };

  const handleStartAgain = () => {
    setShowDrawer(false);
    setData("");
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      skill: "",
      message: "",
    });
  };

  return (
    <>
      <div
        id="contact"
        className="max-w-6xl py-8 md:py-12 mx-auto w-full items-start flex flex-col md:flex-row justify-center gap-12 md:gap-32 px-3"
      >
        <div className="md:flex-1">
          <h1 className="font-semibold text-primary text-2xl md:text-3xl leading-10 mb-5">
            Get a great <span className="text-secondary"> career advice</span>
          </h1>
          <p className="my-5 text-lg text-[#697282]">
            Feel free to reach out to me on social media or drop a message on my
            portfolio.
          </p>
        </div>
        <div className="md:flex-1 w-full">
          <form className="items-center flex flex-col" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6 w-full">
              <Input
                type="text"
                label="First name"
                id="floating_first_name"
                name="first_name"
                onChange={handleInputChange}
                value={formData.first_name}
              />
              <Input
                type="text"
                label="Last name"
                id="ffloating_last_name"
                name="last_name"
                onChange={handleInputChange}
                value={formData.last_name}
              />
            </div>
            <Input
              id="floating_email"
              type="email"
              label=" Email address"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
            />
            <Input
              id="floating_skill"
              type="text"
              label="Skill"
              name="skill"
              onChange={handleInputChange}
              value={formData.skill}
            />
            <div className="flex flex-col justify-between text-sm text-gray-500 w-full">
              <Input
                textArea
                id="message"
                name="message"
                onChange={handleInputChange}
                value={formData.message}
                placeholder="Briefly describe your professional experience, key achievements, and areas of expertise..."
              />
              <div className="w-full flex items-center justify-between -mt-6 mb-7">
                <span>
                  Share your background to help us understand your strengths
                </span>
                <span>{formData.message.length}/300</span>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed w-full"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      <Drawer
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        data={data}
        handleShare={handleShare}
        handleStartAgain={handleStartAgain}
      />
    </>
  );
}

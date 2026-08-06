"use client";
import { useState } from "react"
import { Send } from "lucide-react";
import { send } from "../utils/request";
import RichTextEditor from "../components/richtexteditor";

interface FormData {
  name: string;
  email: string;
  message: string;
}
function Form(){
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData)
    await send("https://script.google.com/macros/s/AKfycbwqpg1sL5qtPMn2DB7F2NgSpgdtZpJLdLqblEazCFXdy0n7370n0cb5EQh-Ip-PTFia/exec", "POST", formData)
    window.scrollTo(0,0)
    open("/contact/submit/", "_self")
  };
  return (
    <form
      className="mt-6 space-y-5"
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Full name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Jane Doe"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"/>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@company.com"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"/>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold">Message</label>
        <RichTextEditor
          value={formData.message}
          onChange={(message) => setFormData({ ...formData, message })}
          placeholder="Tell me about your project…"/>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition hover:brightness-110 active:scale-[0.98]">
        <Send size={16} />
        Submit
      </button>
      {/* <Link to={"/contact/submit/"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-(--shadow-soft) transition hover:brightness-110 active:scale-[0.98]">
        <Send size={16}/>
        Submit
      </Link> */}
    </form>
  )
}
export default Form
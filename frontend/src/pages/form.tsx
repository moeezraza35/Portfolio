import { useRef, useState } from "react"
import { OnScreenContent, RegisteredSection } from "../components/content"
import Input from "../components/input";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm(){
  
  const thisSection = useRef<HTMLElement>(null)
  const [onScreen, setOnScreen] = useState(false)
  
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <OnScreenContent thisSection={thisSection} onScreen={onScreen} setOnScreen={setOnScreen}>
      <RegisteredSection name="contact" ref={thisSection}>
        <div className="slide">
          <h2 className={"slide-heading" + (onScreen?"":" opacity-0 scale-200")}>Contact Me</h2>
        </div>
        <div className="doublesided-content bg-(--bg-color) py-32">
          <div className="gap-4">
            <div>
              <h4>Terms & Conditions</h4>
              <dl>
                <dt>No OTP verification</dt>
                <dd>Your email address will not be verified via OTP. I will reach out to you directly using the email you provide.</dd>

                <dt>Direct communication only</dt>
                <dd>Once you submit the form, I will contact you personally via email or the contact method you specify. No automated responses or bots are used.</dd>

                <dt>No chat room or live chat</dt>
                <dd>This website is built with PHP and does not include any live chat, messaging system, or chat room functionality.</dd>

                <dt>Third-party platforms for conversation</dt>
                <dd>For detailed discussions, project collaboration, or real-time communication, we may continue the conversation on platforms like WhatsApp, LinkedIn, Skype, or email - whichever suits you best.</dd>

                <dt>Data usage</dt>
                <dd>Your name and email address will only be used to respond to your inquiry. They will not be sold, shared, or used for marketing purposes without your explicit consent.</dd>

                <dt>Response time</dt>
                <dd>I aim to reply within 24-48 hours on business days. If you don't hear back, please feel free to reach out again or connect via my social links.</dd>

                <dt>No spam</dt>
                <dd>Your information will never be used for spam, newsletters, or unsolicited promotions. You will only receive replies related to your specific message.</dd>

                <dt>Confidentiality</dt>
                <dd>Any project details or personal information you share will be treated as confidential and used solely for the purpose of providing a quote or discussing potential collaboration.</dd>

                <dt>No obligation</dt>
                <dd>Submitting this form does not create any binding contract or obligation. It's simply a way to start a conversation.</dd>

                <dt>Right to refuse</dt>
                <dd>I reserve the right to decline a project request if it falls outside my expertise or availability.</dd>
              </dl>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="name"
                type="text"
                value={formData.name}
                handleChange={handleChange}/>

              <Input
                name="email"
                type="email"
                value={formData.email}
                handleChange={handleChange}/>

              <Input
                name="message"
                type="textarea"
                value={formData.message}
                handleChange={handleChange}/>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 bg-(--primary-color) text-white font-semibold rounded-lg hover:bg-(--primary-color)/90 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-(--primary-color) focus:ring-offset-2"
              >
                Send Message →
              </button>

              <p className="text-center text-xs text-(--text-secondary) mt-6">
                I'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </RegisteredSection>
    </OnScreenContent>
  )
}
export default ContactForm
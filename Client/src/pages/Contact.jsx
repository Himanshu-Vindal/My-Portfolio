import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Download, Github, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        "service_ykaqslz",   // SERVICE ID
        "template_lgfxfmu",     // TEMPLATE ID
        formRef.current,
        "FNMHRaBdVhv1BhU7T"        // PUBLIC KEY
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section
      id="contact"
      className="px-6 py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="mx-auto max-w-4xl text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          Let’s Build Something Great
        </h2>

        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          I’m open to full-time roles, freelance projects, and startup
          collaborations. If you have an idea or opportunity, let’s talk.
        </p>

        {/* CONTACT INFO */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Email</p>
            <p className="mt-2 text-sky-400 font-semibold">
              himanshuvindal281@gmail.com
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-400">Call / WhatsApp</p>
            <p className="mt-2 text-sky-400 font-semibold">
              <a href="tel:+916378158332">+91 6378158332</a>
         
            </p>
          </div>
        </div>


        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="mt-14 max-w-xl mx-auto rounded-3xl border border-white bg-white/5 p-8 backdrop-blur-md shadow-xl space-y-6"
        >
          {/* NAME */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-sm text-zinc-400">Your Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-white border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-sm text-zinc-400">Your Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-white border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2 text-left">
            <label className="text-sm text-zinc-400">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project or idea..."
              required
              className="w-full rounded-xl bg-black/40 px-4 py-3 text-white border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 outline-none transition resize-none"
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-linear-to-r from-sky-500 to-cyan-400 py-3 font-semibold text-white shadow-lg hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-center text-green-400 text-sm">
              ✅ Message sent successfully. I’ll get back to you soon!
            </p>
          )}
        </form>

        {/* SOCIAL CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/My-Portfolio/Himanshu_Vindal_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-sky-400 px-6 py-3 font-semibold text-sky-400 hover:bg-sky-400 hover:text-black transition"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="https://github.com/Himanshu-Vindal"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-zinc-300 hover:text-white transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/himanshu-vindal-74629727b"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-zinc-300 hover:text-white transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceID = 'service_74o81x1';
    const templateID = 'template_27u1v0o';
    const publicKey = 'yVSScP3UIh4EX4ibz';

    if (serviceID === 'YOUR_SERVICE_ID') {
      alert('Please configure your EmailJS credentials in Contact.jsx');
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          setTimeout(() => {
            setSubmitStatus(null);
            e.target.reset();
          }, 3000);
      }, (error) => {
          console.error(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          label="// Let's Connect"
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, opportunities, or just to say hi!"
        />
        
        <ScrollReveal delay={0.1}>
          <form
            ref={formRef}
            className="mt-8 p-8 rounded-2xl glass-card gradient-border flex flex-col gap-5 text-left"
            onSubmit={sendEmail}
          >
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
              <input type="text" name="user_name" id="user_name" required className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-base text-text-primary focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
              <input type="email" name="user_email" id="user_email" required className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-base text-text-primary focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
              <textarea name="message" id="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-bg-primary text-base text-text-primary focus:outline-none focus:border-lavender focus:ring-1 focus:ring-lavender transition-all resize-y" placeholder="Hello..." />
            </div>
            {submitStatus === 'error' && (
              <p className="text-sm text-pink">Something went wrong. Please try again.</p>
            )}
            <button 
              type="submit" 
              disabled={isSubmitting || submitStatus === 'success'} 
              className={`w-full py-4 rounded-xl transition-all text-base font-semibold cursor-pointer ${
                submitStatus === 'success' 
                  ? 'bg-lavender text-white shadow-lg shadow-lavender/30' 
                  : 'bg-text-primary text-bg-primary hover:bg-lavender hover:shadow-lg hover:shadow-lavender/20 disabled:opacity-70 disabled:cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;

import { FaPhone } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";

function Contact({setOpen}) {
  return (
    <section id="contact" className="container space-y-7">
      <h3 className="tracking-[5px] text-green text-[12px] md:text-sm font-bold bg-green/10 rounded-full px-8 py-1 w-max m-auto">
        WORK WITH US
      </h3>
      <h1 className="text-xl sm:text-2xl lg:text-4xl text-center font-bold">
        Starting A New Project Soon ?
      </h1>
      <div className="flex items-center sm:flex-row flex-col gap-4 sm:gap-6 justify-center">
        <a href="tel:+000000000" className={styles.button}>
          <span>Call Now</span>
          <FaPhone />
        </a>
        <p className="sm:block hidden">OR</p>
        <button onClick={() => setOpen(true)} className={styles.button}>
          <span>Send Message</span>
          <BiSolidMessage />
        </button>
      </div>
    </section>
  );
}

const styles = {
  button:
    "bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center justify-center gap-3 sm:w-max w-[60%]",
};

export default Contact;

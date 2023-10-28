import { FaPhone } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";

function Contact({setOpen}) {
  return (
    <section className="container space-y-7">
      <h3 className="tracking-[5px] text-green text-sm font-bold bg-green/10 rounded-full px-8 py-1 w-max m-auto">
        WORK WITH US
      </h3>
      <h1 className="text-4xl text-center font-bold">
        Staring A New Project Soon ?
      </h1>
      <div className="flex items-center gap-6 justify-center">
        <a href="tel:+000000000" className={styles.button}>
          <span>Call Now</span>
          <FaPhone />
        </a>
        <p>OR</p>
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
    "bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3",
};

export default Contact;

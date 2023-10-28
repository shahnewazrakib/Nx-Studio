import React from "react";

function Popup({ open, setOpen }) {
  return (
    <div
      className={`${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition duration-300 w-screen h-screen fixed top-0 left-0 z-[1000] bg-[#7a9c974d] backdrop-blur-xl flex items-center justify-center shadow-xl`}
    >
      <div className="w-[500px] bg-white rounded-lg p-8">
        <h1 className="text-xl font-semibold text-center">Send A Message</h1>
        <p className="text-light mt-1 text-center">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="space-y-4 pt-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={styles.label}>
              Full Name
            </label>
            <input className={styles.input} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={styles.label}>
              Email Address
            </label>
            <input className={styles.input} type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className={styles.label}>
              Message
            </label>
            <textarea rows={6} className={styles.input}></textarea>
          </div>

          <div className="flex items-center gap-4 justify-end">
            <button onClick={() => setOpen(false)} className="bg-white border border-gray text-sm font-medium rounded-md px-3 py-[10px] text-dark shadow-sm">
              Close
            </button>
            <button className="bg-violet text-sm rounded-md px-3 py-[10px] text-white flex items-center gap-3">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  label: "text-light text-sm font-medium",
  input: "outline-none border border-gray rounded-md p-3 resize-none",
};

export default Popup;

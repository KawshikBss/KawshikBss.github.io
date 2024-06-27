import React from "react";

type Props = {};

function Contact({}: Props) {
    return (
        <div
            id="contact"
            className="w-full flex flex-col items-center gap-20 py-20"
        >
            <span className="text-[#14e956] font-black text-4xl uppercase transform skew-y-6 drop-shadow-[0_4px_4px_#14e956]">
                Connect With Me
            </span>
            <form className="w-3/5 flex flex-col gap-10">
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="w-full md:w-2/5 flex flex-col justify-between items-start text-[#14e956]">
                        <label htmlFor="name">Your Identity?*</label>
                        <input
                            className="w-full bg-transparent border-b-2 border-[#14e956] py-4 px-2 outline-none"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                        />
                    </div>
                    <div className="w-full md:w-2/5 flex flex-col justify-between items-start text-[#14e956]">
                        <label htmlFor="email">
                            Your Online Correspondence?*
                        </label>
                        <input
                            className="w-full bg-transparent border-b-2 border-[#14e956] py-4 px-2 outline-none"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Enter Your Email Address"
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/5 flex flex-col justify-between items-start text-[#14e956]">
                    <label htmlFor="message">Express Your Thoughts*</label>
                    <input
                        className="w-full bg-transparent border-b-2 border-[#14e956] py-4 px-2 outline-none"
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Enter Your Message To Me"
                    />
                </div>
                <button
                    type="submit"
                    className="w-fit self-center bg-[#14e956] hover:bg-[#12141d] py-3 px-8 rounded-lg text-lg text-[#12141d] hover:text-[#14e956] font-black shadow-2xl shadow-[rgba(20,233,86,.74)] transition-all duration-300 ease-in-out animate-pulse"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;

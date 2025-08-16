// ContactForm.tsx

const ContactForm = () => {
    return (
        <form
            className="Fade_Up bg-LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-4 outline outline-1 outline-white/20 flex_center flex-col"
            action="https://hello.suresh.app/db/submit.php"
            method="post"
        >
            {/* Name */}
            <label htmlFor="name" className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete="name"
                    required
                />
            </label>

            {/* Email */}
            <label htmlFor="email" className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete="email"
                    required
                />
            </label>

            {/* Message */}
            <label htmlFor="message" className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    required
                />
            </label>

            {/* Captcha */}
            <div className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                <label className="form-label" id="captcha">4 + 4 =</label>
                <input
                    className="form-control w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    type="number"
                    name="captcha-response"
                    required
                />
                <input type="hidden" name="captcha-solution" value="8" />
            </div>

            {/* Submit */}
            <div className="w-full flex justify-start items-center gap-4 mt-2">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-1 outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md btn btn-primary"
                    type="submit"
                >
                    Send Now
                </button>
            </div>
        </form>
    )
}

export default ContactForm

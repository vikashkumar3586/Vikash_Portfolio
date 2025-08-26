import { useState } from "react"
import { toast } from "react-toastify"
import { useTheme } from "../../services/ThemeProvider"

interface DataStructre {
    naam: string,
    mail: string,
    msg: string,
}

function ReachMe() {
    const [data, setData] = useState<DataStructre>({
        naam: "",
        mail: "",
        msg: ""
    });
    const { theme } = useTheme();
    const url = `${import.meta.env.VITE_BACKEND_URL}/dev/connect`;
    const [loading, setLoading] = useState<boolean>(false);

    function handler(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        e.preventDefault();
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            
            if(!response.ok) {
                throw new Error("Failed to send message");
            }
            const result = await response.json();
            toast.success(result.message || "Message sent successfully!")

        } catch(e) {
            if(e instanceof Error) {
                console.error("Error:", e.message);
            }
            else {
                console.error("An unexpected error occurred:", e);
            }
            toast.error("Failed to send message. Please try again.");
        }
        setLoading(false);
    }

    return (
        <section className="w-full flex flex-col items-start gap-y-3 mb-20">
            <h2 className='sm:text-xl font-bold mt-2'>Send Me a Message</h2>
            <p>Have a question, idea or just want to say hi? Drop a message below.</p>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-4">
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="naam" className="w-full">
                        Name:
                    </label>
                    <input type="text" name="naam" required={true}
                        onChange={handler}
                        value={data?.naam} placeholder="Enter your name..." className="w-full outline-none p-2 border border-neutral-600 rounded-lg indent-2 block" />
                </div>
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="mail" className="w-full">
                        Email:
                    </label>
                    <input type='email' name="mail" required={true} onChange={handler} value={data?.mail} placeholder="Enter your email..." className="w-full outline-none p-2 border border-neutral-600 rounded-lg indent-2 block" />
                </div>
                <div className="w-full flex flex-col gap-y-2">
                    <label htmlFor="msg" className="w-full">
                        Message:
                    </label>
                    <textarea name="msg" id="msg" placeholder="Enter your message..." rows={5} onChange={handler} className="w-full outline-none p-2 border border-neutral-600 rounded-lg indent-2 block"></textarea>
                </div>
                <button type="submit" className={`cursor-pointer w-full outline-none p-2 border border-neutral-600 rounded-lg ${theme == "dark" ? "bg-[var(--button-bg-dark)] hover:bg-[var(--button-hover-bg-dark)]" : "bg-[var(--button-bg-light)] hover:bg-[var(--button-hover-bg-light)]" } transition-all duration-300 ease-in-out`}>
                     <span className='w-full h-6 flex items-center justify-center'>
                    {loading
                        ? <span className={`loader-${theme}`}></span>
                        : <span>Send Message</span>
                    }
                    </span>
                </button>
            </form>
                    
            {/* <div>
                {data && JSON.stringify(data)}
            </div> */}
        </section>
    )
}

export default ReachMe;
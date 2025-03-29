"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi"; // Icon for the send button
import sendEmails from "./sendEmail";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false); // Loader state
    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true); // Start loading
            const result = await sendEmails(formData.fullName, formData.email, formData.subject);
            
            if (result.success) {
                toast.success("Emails sent successfully!");
                setFormData({ fullName: "", email: "", subject: "", message: "" }); // Clear form
            } else {
                toast.error("Failed to send emails.");
            }
            setIsLoading(false); // Stop loading
            setFormData({
                fullName: "",
                email: "",
                subject: "",
                message: ""
            })
        } else {
            toast.error("Please fix the errors before submitting.");
        }
    };

    return (
        <div className="shadow-lg pt-3">
            {/* Custom Heading Style */}
            <h2 className="text-3xl font-bold mb-6 text-gray-100 tracking-wide">Contact Form</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email in the same row on large screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-600 rounded-2xl focus:ring-1 bg-transparent text-white placeholder-gray-400 outline-none px-5 py-4"
                            placeholder="Full Name"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-600 rounded-2xl focus:ring-1 bg-transparent text-white placeholder-gray-400 outline-none px-5 py-4"
                            placeholder="Email Address"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                </div>

                {/* Subject */}
                <div>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-600 rounded-2xl focus:ring-1 bg-transparent text-white placeholder-gray-400 outline-none px-5 py-4"
                        placeholder="Subject"
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-600 rounded-2xl focus:ring-1 bg-transparent text-white placeholder-gray-400 outline-none px-5 py-4"
                        rows="4"
                        placeholder="Your Message"
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    disabled={isLoading || !(
                        formData.fullName.trim() &&
                        formData.email.trim() &&
                        formData.subject.trim() &&
                        formData.message.trim() &&
                        emailRegex.test(formData.email)
                    )}
                    type="submit"
                    className={`w-full bg-gradient-to-r from-[#FCE469] to-orange-500 text-white py-3 rounded-2xl flex items-center justify-center gap-2 hover:opacity-90 transition outline-none ${
                        isLoading || !(
                            formData.fullName.trim() &&
                            formData.email.trim() &&
                            formData.subject.trim() &&
                            formData.message.trim() &&
                            emailRegex.test(formData.email)
                        ) ? "cursor-not-allowed opacity-50" : "cursor-pointer"
                    }`}
                >
                    {isLoading ? (
                        <span className="animate-spin h-5 w-5 border-t-2 border-white border-solid rounded-full"></span>
                    ) : (
                        <FiSend className="text-lg" />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                </button>

            </form>
        </div>
    );
};

export default ContactForm;

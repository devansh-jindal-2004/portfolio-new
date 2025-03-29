import emailjs from "@emailjs/browser";

const sendEmails = async (name, email, title) => {
    try {
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID; // Replace with your EmailJS Service ID
        const userTemplateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; // Template for User
        const ownerTemplateID = process.env.NEXT_PUBLIC_EMAILJS_OWNERTEMPLATE; // Template for Yourself
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS Public Key
        const ownerEmail = "devanshjindal31@gmail.com"; // Your email

        // Send email to the user
        const userEmailParams = {
            name: name,
            email: email,
            title: title, // Subject
        };
        const userResponse = await emailjs.send(serviceID, userTemplateID, userEmailParams, publicKey);
        console.log("User email sent successfully:", userResponse);

        // Send email to yourself
        const ownerEmailParams = {
            name: name,
            email: ownerEmail,
            title: title, // Subject
            user_email: email, // So you know who contacted you
        };
        const ownerResponse = await emailjs.send(serviceID, ownerTemplateID, ownerEmailParams, publicKey);
        console.log("Owner email sent successfully:", ownerResponse);

        return { success: true, message: "Both emails sent successfully!" };
    } catch (error) {
        console.error("Error sending emails:", error);
        return { success: false, message: "Failed to send emails. Please try again later." };
    }
};

export default sendEmails;


import emailjs from "@emailjs/nodejs"

function buildCustomerEmailData(booking, actionType) {
    
    const isCancel = actionType === "cancellation";

    return {
        
        action_type: actionType,

        title: isCancel ? "Booking Cancelled" : "Booking Confirmed",

        message: isCancel ? "Your booking has been successfully cancelled." : "Thank you for booking with Ortega's Cleaning",

        booking_id: booking._id.toString(),
        customer_name: booking.name,
        customer_email: booking.email,
        service_location: booking.serviceLocation,
        frequency: booking.frequency,
    };
}

export async function sendCustomerEmail(booking, actionType = "booking") {

    return emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_CUSTOMER_CONFIRM_TEMPLATE_ID,
        buildCustomerEmailData(booking, actionType),
        {
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            privateKey: process.env.EMAILJS_PRIVATE_KEY,
        }
    );
}

function buildOwnerEmailData(booking, actionType = "booking") {

    const isCancel = actionType === "cancellation";

    return {
        action_type: actionType,

        title: isCancel ? "New Cancellation Request" : "New Booking Received",

        customer_name: booking.name,
        customer_name: booking.name,
        customer_email: booking.email,
        customer_phone: booking.phone,
        customer_address: booking.address,
        service_location: booking.serviceLocation,
        frequency: booking.frequency,
    };
}

export async function sendOwnerEmail(booking, actionType = "booking") {
    
    return emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_OWNER_CONFIRM_TEMPLATE_ID,
        buildOwnerEmailData(booking, actionType),
        {
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
            privateKey: process.env.EMAILJS_PRIVATE_KEY,
        }
    );
}
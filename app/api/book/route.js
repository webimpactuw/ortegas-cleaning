import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import { connectToDB } from "@/app/lib/mongodb"
// import { sendEmail } from "../../lib/email/sendEmail"

const MONGO_URI = process.env.MONGO_URI;

// csaltz6_db_user
// 3ImihQwzDZffDFRO

if (!MONGO_URI) {
    throw new Error("Missing MONGO_URI");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null };
}

async function connectDB() {
    if (cached.conn) return cached.conn;

    cached.conn = await mongoose.connect(MONGO_URI);
    return cached.conn;
}

// schema
const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    serviceLocation: String,
    serviceType: String,
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export async function POST(req) {

    try {

        await connectDB();

        const body = await req.json();

        //console.log("Received:", body);

        const booking = new Booking(body);
        await booking.save();

        /*
        const emailOwner = `
            <h2>New Booking</h2>
            <p>Name: ${body.name}</p>
            <p>Email: ${body.email}</p>
            <p>Phone: ${body.phone}</p>
            <p>Service: ${body.serviceType}</p>
        `;

        const emailUser = `
            <p>Thanks ${body.name}, we'll contact you soon.</p>
            <p>To view or cancel your booking, visit the link below.</p>
            <a href="https://localhost:3000/book/view">View my booking</a>
        `;

        await sendEmail({
            to: "owner@gmail.com",
            subject: "New Booking Request",
            emailOwner,
        });

        await sendEmail({
            to: body.email,
            subject: "We received your booking!",
            emailUser,
        });
        */
       
        return NextResponse.json({id: booking._id},{ message: "Saved" }, { status: 201 });
   
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import mongoose from "mongoose";
// import { connectToDB } from "@/app/lib/mongodb"
import { sendCustomerEmail, sendOwnerEmail } from "@/app/lib/email/sendEmail";

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
    address: String,
    serviceLocation: String,
    frequency: String,
    status: String,
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export async function POST(req) {

    try {

        await connectDB();

        const body = await req.json();

        const booking = new Booking(body);

        await booking.save();

        await sendCustomerEmail(booking, "booking");

        await sendOwnerEmail(booking, "booking");
       
        return NextResponse.json(
            {id: booking._id, message: "Saved" }, 
            { status: 201 }
        );
   
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}
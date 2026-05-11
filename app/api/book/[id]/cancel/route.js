import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null }
}

async function connectDB(){
    if (cached.conn) return cached.conn;
    cached.conn = await mongoose.connect(MONGO_URI);
    return cached.conn;
}

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

export async function POST(req, { params }) {
    const { id } = await params;

    try {
        await connectDB();

        await Booking.findByIdAndUpdate(id, {
            status: "cancelled",
        });

        return NextResponse.json({ message: "Booking cancelled" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed" }, { status: 500 });
    }
}
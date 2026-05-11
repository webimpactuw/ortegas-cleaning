import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null };

async function connectDB() {
    if (cached.conn) return cached.conn;
    cached.conn = await mongoose.connect(MONGO_URI);
    return cached.conn;
}

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    serviceLocation: String,
    serviceType: String,
    status: String,
});

const Booking = mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export async function GET(req, { params }) {
    await connectDB();

    const booking = await Booking.findById(params.id);

    if (!booking) {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    return NextResponse.json(booking);
}
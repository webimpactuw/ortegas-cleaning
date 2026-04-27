import Link from "next/link";

export default function CancelBooking({ id }){

    return (
        <div>
            <Link href={`/book/${id}/cancel`}>Cancel Booking</Link>
        </div>
    );

}
import Link from "next/link";

export default function BookNow() {
  return (
    <Link
      href="/book"
      className="rounded-[8px] text-white px-6 py-2"
      style={{ background: "var(--gradient-btn)" }}
    >

      Book Now
    </Link >
  );
}

import Navbar from "@/components/Navbar";
import ReviewPageCard from "@/components/ReviewPageCard";
import Link from "next/link";

const reviews = [
  {
    reviewer: "Maria Rodriguez",
    reviewText: "They've been cleaning my office for months. Consistent quality and friendly service every time!",
    numStars: 5,
  },
  {
    reviewer: "Sarah Mitchell",
    reviewText: "Ortega's team transformed my home! Professional, thorough, and incredibly trustworthy. Highly recommend!",
    numStars: 5,
  },
  {
    reviewer: "David Chen",
    reviewText: "Best cleaning service we've ever used. Always on time, detail-oriented, and reasonably priced.",
    numStars: 5,
  },
];

const allReviews = [...reviews, ...reviews, ...reviews];

export default function ReviewsPage() {
  return (
    <div>
      <Navbar />

      <main
        className="flex flex-col items-center py-16 px-6"
        style={{ background: "linear-gradient(to bottom, var(--footer-gradient-end), var(--footer-gradient-start))" }}
      >
        <h1 className="font-[Playfair_Display] text-[2.4rem] font-[600] text-[#2E4E65] mb-2">
          Our Reviews
        </h1>
        <p className="font-[inter] text-[#4A4A4ACC] mb-10">
          Hear from our customers why they choose Ortega&apos;s House Cleaning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {allReviews.map((review, index) => (
            <ReviewPageCard
              key={index}
              numStars={review.numStars}
              reviewer={review.reviewer}
              reviewText={review.reviewText}
            />
          ))}
        </div>

        <Link
          href="#"
          className="mt-10 font-[inter] font-[600] text-[#2E4E65] hover:underline"
        >
          Show more reviews →
        </Link>
      </main>
    </div>
  );
}

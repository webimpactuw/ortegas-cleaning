import Navbar from "@/components/Navbar";
import ReviewPageCard from "@/components/ReviewPageCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const REVIEWS_QUERY = `*[_type == "review"] | order(_createdAt desc) {
  _id,
  reviewer,
  reviewText,
  numStars
}`;

export default async function ReviewsPage() {
  const reviews = await client.fetch(REVIEWS_QUERY);

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

        {reviews.length === 0 ? (
          <p className="font-[inter] text-[#4A4A4ACC]">No reviews yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
            {reviews.map((review) => (
              <ReviewPageCard
                key={review._id}
                numStars={review.numStars}
                reviewer={review.reviewer}
                reviewText={review.reviewText}
              />
            ))}
          </div>
        )}

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

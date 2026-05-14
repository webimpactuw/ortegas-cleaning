import Link from "next/link";
import Review from "./Review";
import { client } from "@/sanity/lib/client";

const FEATURED_REVIEWS_QUERY = `*[_type == "review" && featuredOnHomepage == true] | order(_createdAt desc) [0...3] {
  _id,
  reviewer,
  reviewText,
  numStars
}`;

export default async function WhatOurClientsSay() {
  const reviews = await client.fetch(FEATURED_REVIEWS_QUERY);

  return (
    <div className="flex flex-col items-center bg-[#F4EBDD] py-12 gap-2">
      <h1 className="font-[Playfair_Display] text-[2.2rem] font-[600] text-[#2E4E65]">What Our Clients Say</h1>

      <div className="font-[inter] text-[#4A4A4ACC]">Hear from our satisfied customers</div>

      {reviews.length > 0 && (
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4 mb-8">
          {reviews.map((review) => (
            <Review
              key={review._id}
              numStars={String(review.numStars)}
              reviewer={review.reviewer}
              reviewText={review.reviewText}
            />
          ))}
        </div>
      )}

      <Link href="/reviews" className="rounded-[16px] text-white font-[Inter] font-[600]
                              text-[0.8rem] px-7 py-2.5 bg-[#2E4E65]">
        All reviews →
      </Link>
    </div>
  );
}

import Navbar from "@/components/Navbar";


// book to label page; to be changed
export default function TermsConditions() {

    const textFont = "text-sm font-[inter] font-normal"

    return (
        <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="w-full h-full bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-[inter] font-normal text-2xl leading-8 tracking-normal text-center text-[#4A6B8A] mb-6">
                    Terms & Conditions
                </h2>
                <div className="space-y-5 text-gray-600 leading-rekaxed">
                    <p className={textFont}>
                        We offer flat-rate pricing based on the size of your home, including the total square footage, number of bedrooms, and number of bathrooms. Pricing is determined by these factors to ensure an accurate quote that reflects the scope of work needed.
                    </p>
                    <p className={textFont}>
                        Cancellation: We kindly require at least 72 business hours’ notice for any cancellations or rescheduling requests. Cancellations made with less than 72 business hours’ notice will result in a $50 cancellation fee. Cancellations or rescheduling within 24 hours of your scheduled service will be charged the full cleaning amount.
                    </p>
                    <p className={textFont}>
                        We Do Not: We do not put away personal items such as clothing or dishes. For health and safety reasons, we are also unable to clean or remove pet waste or pet vomit. 
                    </p>
                    <p className={textFont}>
                        Additional Request: We’re happy to provide extra services beyond our Standard Cleaning. Please review our list of add-ons and let us know at least 48 hours in advance (minimum 24 hours) what you would like done. This ensures we have enough time in our schedule to complete your requests without rushing. 
                    </p>
                    <p className={textFont}>
                        Please note: We have other clients scheduled after your cleaning, so we cannot extend beyond the allotted time. This helps us maintain the same high-quality service for every home we visit.
                    </p>
                </div>
            </div>
           
        </div>
    );
}
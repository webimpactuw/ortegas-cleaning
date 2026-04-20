import Image from "next/image";
import ServicesPageCard from "./ServicesPageCard";
import Bubble from "./Bubble";
import House from "../public/House.svg";
import Building from "../public/Building.svg";

function HouseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M19.9977 27.997V17.3314C19.9977 16.9779 19.8572 16.6388 19.6072 16.3887C19.3572 16.1387 19.0181 15.9983 18.6645 15.9983H13.3317C12.9781 15.9983 12.639 16.1387 12.389 16.3887C12.139 16.6388 11.9985 16.9779 11.9985 17.3314V27.997" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99951 13.3319C3.99942 12.944 4.08395 12.5608 4.2472 12.209C4.41046 11.8571 4.6485 11.5451 4.94474 11.2948L14.2771 3.29697C14.7583 2.89023 15.3681 2.66707 15.9982 2.66707C16.6283 2.66707 17.2381 2.89023 17.7194 3.29697L27.0517 11.2948C27.3479 11.5451 27.586 11.8571 27.7492 12.209C27.9125 12.5608 27.997 12.944 27.9969 13.3319V25.3306C27.9969 26.0377 27.716 26.716 27.2159 27.216C26.7159 27.716 26.0377 27.997 25.3305 27.997H6.66589C5.95872 27.997 5.28052 27.716 4.78048 27.216C4.28043 26.716 3.99951 26.0377 3.99951 25.3306V13.3319Z" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M7.99902 29.3302V5.33276C7.99902 4.62559 8.27994 3.94739 8.77999 3.44735C9.28003 2.9473 9.95823 2.66638 10.6654 2.66638H21.3309C22.0381 2.66638 22.7163 2.9473 23.2163 3.44735C23.7164 3.94739 23.9973 4.62559 23.9973 5.33276V29.3302H7.99902Z" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99926 15.9983H5.33288C4.62571 15.9983 3.94751 16.2792 3.44747 16.7792C2.94742 17.2793 2.6665 17.9575 2.6665 18.6646V26.6638C2.6665 27.3709 2.94742 28.0491 3.44747 28.5492C3.94751 29.0492 4.62571 29.3301 5.33288 29.3301H7.99926" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23.9976 11.9987H26.6639C27.3711 11.9987 28.0493 12.2796 28.5493 12.7797C29.0494 13.2797 29.3303 13.9579 29.3303 14.6651V26.6638C29.3303 27.3709 29.0494 28.0491 28.5493 28.5492C28.0493 29.0492 27.3711 29.3302 26.6639 29.3302H23.9976" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 7.99913H18.6648" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 13.3319H18.6648" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 18.6646H18.6648" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.332 23.9974H18.6648" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M13.2479 20.6644C13.1289 20.203 12.8884 19.782 12.5515 19.445C12.2146 19.1081 11.7935 18.8676 11.3322 18.7486L3.15304 16.6395C3.01349 16.5999 2.89068 16.5158 2.80323 16.4001C2.71577 16.2844 2.66846 16.1433 2.66846 15.9982C2.66846 15.8532 2.71577 15.7121 2.80323 15.5964C2.89068 15.4806 3.01349 15.3966 3.15304 15.357L11.3322 13.2465C11.7934 13.1276 12.2143 12.8873 12.5512 12.5507C12.8881 12.214 13.1287 11.7932 13.2479 11.3321L15.357 3.15296C15.3963 3.01287 15.4802 2.88945 15.5961 2.80153C15.712 2.71361 15.8535 2.66602 15.999 2.66602C16.1445 2.66602 16.2859 2.71361 16.4018 2.80153C16.5177 2.88945 16.6017 3.01287 16.6409 3.15296L18.7487 11.3321C18.8677 11.7935 19.1082 12.2145 19.4451 12.5514C19.782 12.8884 20.2031 13.1288 20.6645 13.2479L28.8436 15.3556C28.9842 15.3944 29.1083 15.4783 29.1967 15.5944C29.2851 15.7105 29.3329 15.8523 29.3329 15.9982C29.3329 16.1441 29.2851 16.286 29.1967 16.4021C29.1083 16.5182 28.9842 16.602 28.8436 16.6408L20.6645 18.7486C20.2031 18.8676 19.782 19.1081 19.4451 19.445C19.1082 19.782 18.8677 20.203 18.7487 20.6644L16.6396 28.8435C16.6004 28.9836 16.5164 29.107 16.4005 29.1949C16.2846 29.2829 16.1431 29.3305 15.9976 29.3305C15.8522 29.3305 15.7107 29.2829 15.5948 29.1949C15.4789 29.107 15.3949 28.9836 15.3557 28.8435L13.2479 20.6644Z" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6636 3.99957V9.33233" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.3303 6.66595H23.9976" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.33252 22.6642V25.3306" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.66589 23.9974H3.99951" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M15.9984 29.3302C23.3614 29.3302 29.3303 23.3613 29.3303 15.9983C29.3303 8.63527 23.3614 2.66638 15.9984 2.66638C8.63539 2.66638 2.6665 8.63527 2.6665 15.9983C2.6665 23.3613 8.63539 29.3302 15.9984 29.3302Z" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.998 7.99915V15.9983L21.3308 18.6647" stroke="#4A6B8A" strokeWidth="2.66638" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function ServicesPageCards() {
  return (
    <div className="relative bg-linear-to-t from-[#EFF6FF] via-[#F9EBDC]">
      {/* Medium bubble centered at the hero/cards boundary */}
      <Bubble styleTags="hidden md:block" size={75}  top="-38px" left="46%" />
      {/* Large bubble on far right spanning from hero into cards */}
      <Bubble styleTags="hidden md:block" size={220} top="-110px" right="-20px" />

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServicesPageCard
            iconNode={<HouseIcon />}
            title="Residential Cleaning"
            badge="Most Popular"
            description="Complete home cleaning services for houses and apartments"
            features={[
              "Living room and bedroom cleaning",
              "Kitchen deep cleaning and sanitization",
              "Bathroom scrubbing and disinfecting",
              "Floor vacuuming and mopping",
              "Dusting all surfaces and furniture",
              "Window and mirror cleaning",
            ]}
          />
          <ServicesPageCard
            iconNode={<BuildingIcon />}
            title="Commercial Cleaning"
            description="Professional office and business space maintenance"
            features={[
              "Workspace and desk cleaning",
              "Reception and common areas",
              "Conference room maintenance",
              "Restroom sanitization",
              "Floor care and maintenance",
              "Trash removal and recycling",
            ]}
          />
          <ServicesPageCard
            iconNode={<SparkleIcon />}
            title="Deep Cleaning"
            description="Intensive cleaning services for special occasions or move-in/move-out"
            features={[
              "Detailed cleaning of all areas",
              "Appliance interior cleaning",
              "Baseboard and trim wiping",
              "Cabinet and drawer cleaning",
              "Light fixture dusting",
              "Behind furniture cleaning",
            ]}
          />
          <ServicesPageCard
            iconNode={<ClockIcon />}
            title="Recurring Services"
            description="Regular maintenance plans tailored to your schedule"
            features={[
              "Weekly cleaning options",
              "Bi-weekly maintenance",
              "Monthly deep cleans",
              "Flexible scheduling",
              "Consistent team members",
              "Discounted rates for regulars",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

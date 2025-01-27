// import React from "react";
import imgDeposit from "../Images/Deposit.svg"
import imgInvestment from "../Images/Investment.svg"
import imgCredit from "../Images/Credit.svg"
import imgInsurance from "../Images/Insurance.svg"

const PricingTable = () => {
  // PricingCard component for individual card rendering
  const PricingCard = ({ title, plans, imgSrc, description }) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/4 border rounded-lg border-slate-200 p-4 flex flex-col h-[400px] transition-transform duration-300 hover:scale-105">
        <div className="border-slate-100 p-10 flex justify-between rounded-t-xl flex-grow-0">
          <img src={imgSrc} alt={title} className="w-16" />
          <p className="text-slate-700 text-base">{plans} Plans</p>
        </div>
        <div className="border-slate-100 px-10 py-0 flex flex-col flex-grow">
          <h3 className="font-poppins text-slate-900 font-semibold text-xl sm:text-xl md:text-2xl leading-[42px] sm:leading-[48px] lg:leading-[52px] my-5">
            {title}
          </h3>
          {description.map((desc, index) => (
            <p key={index} className="text-slate-700 text-base">{desc}</p>
          ))}
        </div>
        <div className="border-slate-100 p-10 font-semibold text-xl flex flex-col rounded-b-xl flex-grow-0">
          {/* <p className="text-slate-700 text-base">View Details</p> */}
        </div>
      </div>
    );
  };

  // Card data
  const cardData = [
    {
      title: "Auditing Services",
      plans: 5,
      imgSrc: imgDeposit, 
      description: ["=> Statutory Audits", "=> Internal Audits","=> Concurrent Audits","=> Due Diligence Audits", "=>   Stock Audits"]
    },
    {
      title: "Taxation Services",
      plans: 3,
      imgSrc: imgInvestment,
      description: ["=> Tax planning for all entities", "=> Filing of returns under Income Tax Act, GST, and Sales Tax Act", "=> Liaison with income tax and excise departments"]
    },
    {
      title: "Finance Services",
      plans: 4,
      imgSrc: imgCredit,
      description: ["=> Project finance consultancy", "=> Capital restructuring and advisory services", "=> Government subsidy liaising", "=> Loan and working capital assessments"]
    },
    {
      title: "Company Affairs",
      plans: 3,
      imgSrc: imgInsurance,
      description: ["=> Company formation and management", "=> Conducting board meetings and general meetings", "=> Handling ROC filings and compliance"]
    }
  ];

  return (
    <div className="flex gap-0 items-center justify-center flex-wrap">
      {cardData.map((card, index) => (
        <PricingCard
          key={index}
          title={card.title}
          plans={card.plans}
          imgSrc={card.imgSrc}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default PricingTable;

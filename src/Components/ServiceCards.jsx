import mobile from "../Images/mobile.svg";
import gains from "../Images/gains.svg";
import growth from "../Images/growth.svg";
import support from "../Images/support.svg";
import account from "../Images/accounts.svg";
import gold from "../Images/gold.svg";

const Card = ({ icon, title, description, buttonText }) => {
  return (
    <div className="group flex flex-col justify-center items-center px-6 py-6 rounded-xl bg-white hover:shadow-xl hover:bg-slate-100 transition-all duration-300">
      <div className="bg-slate-50 p-10 m-6 w-32 text-center rounded-full shadow-lg group-hover:bg-slate-200 transition-all duration-300">
        <img src={icon} alt={title} className="w-16 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold py-6 group-hover:text-color-1 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-lg w-full text-center text-slate-600 lg:text-base py-6 group-hover:text-slate-800 transition-colors duration-300">
        {description}
      </p>
      <button className="text-color-1 font-semibold px-4 py-2 rounded hover:text-color-2">
        {buttonText}
      </button>
    </div>
  );
};

const App = () => {
  const cardData = [
    {
      icon: mobile,
      title: "Goods and Services Tax (GST)",
      description:
        "We offer GST registration and return filing, cancellation of registration, and assistance with refunds and assessments.",
      buttonText: "View Details",
    },
    {
      icon: gains,
      title: "Business Process Outsourcing",
      description:
        "We offer fraud risk management, net worth analysis and certifications, and asset register maintenance and updates.",
      buttonText: "Learn More",
    },
    {
      icon: growth,
      title: "ISO Certification and Credit Rating",
      description:
        "We provide ISO certification assessments and audits, along with credit rating preparation and liaison with financial institutions.",
      buttonText: "Explore Now",
    },
    {
      icon: support,
      title: "Accounting and MIS",
      description:
        "We specialize in the design and implementation of MIS and accounting systems, along with solutions for debtor management, inventory, and sales distribution.",
      buttonText: "Explore Now",
    },
    {
      icon: account,
      title: "XBRL Services",
      description:
        "We handle filing with the Ministry of Corporate Affairs for financial reporting, ensuring compliance with regulatory requirements.",
      buttonText: "Explore Now",
    },
    {
      icon: gold,
      title: "Recruitment Services",
      description:
        "We offer staff recruitment services for various industries, helping businesses find the right talent to meet their needs.",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default App;

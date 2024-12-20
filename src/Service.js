import React, { useState, useEffect } from "react";

const Service = () => {
  const arrays = [
    { id: 1, name: "Filing Of Salary Returns", content: "Ensures accurate income and tax calculation to meet obligations and avoid penalties." },
    { id: 2, name: "Tax Consulting", content: "Offers expert advice on tax planning, compliance, and strategies to reduce tax liabilities." },
    { id: 3, name: "Preparation Of TDS (3 Months Once)", content: "Calculates and reports tax deductions (TDS) accurately on behalf of clients." },
    { id: 4, name: "Filing of GST Monthly Returns", content: "Online monthly filings for sales, purchases, tax, and other details via GST portal." },
    { id: 5, name: "Filing of GSTR9 and GSTR9C For Annual Return", content: "Merges and verifies annual returns for accuracy, filed annually by registered taxpayers." },
    { id: 6, name: "Payment of Challans For Income Tax And GST", content: "Processes and pays client challans accurately and promptly as requested." },
    { id: 7, name: "Project Report", content: "Prepares financial reports from business documents for startups, providing insights and projections." },
    { id: 8, name: "Project And Provisional Statements", content: "Compiles bank and asset statements for submission to Income Tax authorities." },
    { id: 9, name: "Generation of UDIN", content: "Generates UDIN per client request or Income Tax regulations." },
    { id: 10, name: "Tax Advising", content: "Assesses finances, provides tax-saving insights, and ensures tax compliance." },
    { id: 11, name: "Reconciliation Of Statements", content: "Identifies and corrects discrepancies across financial records to maintain tax compliance." },
    { id: 12, name: "TDS Payments And TCS Payments", content: "Calculates and deposits TDS/TCS on time, ensuring compliance with guidelines." },
    { id: 13, name: "Maintenance Of Day Book Ledger", content: "Records daily financial transactions for accurate tracking of income, expenses, and payments" },
    { id: 14, name: "Maintenance Of General Accounts", content: "Records all financial transactions to maintain an organized financial overview." },
  ];

  const [original, setOriginal] = useState("OUR PRIMARY INCOME TAX SERVICES");
  const [originalContent, setOriginalContent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // Treat devices <= 768px width as mobile/tablet
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  const handleInteraction = (id) => {
    const itemss = arrays.find((item) => item.id === id);
    if (itemss) {
      if (original === itemss.name) {
        // Toggle off if already selected
        setOriginal("OUR PRIMARY INCOME TAX SERVICES");
        setOriginalContent("");
      } else {
        setOriginal(itemss.name);
        setOriginalContent(itemss.content);
      }
    }
  };

  const resetContent = () => {
    setOriginal("OUR PRIMARY INCOME TAX SERVICES");
    setOriginalContent("");
  };

  return (
    <div id="services" className="w-full min-h-[700px] flex justify-center items-center">
      <div className="w-4/5 min-h-[500px] bg-[#6552D0] rounded-3xl lg:flex lg:flex-row sm:flex sm:flex-col sm:gap-4 sm:place-items-center">
        {/* Content Section */}
        <div className="md:w-2/5 md:min-h-[250px] p-8 flex flex-col justify-center items-center gap-4 transition-all duration-500 ease-in-out sm:w-full sm:min-h-[350px] xs:min-h-[300px]">
          <h1 className={`md:text-xl text-white font-extrabold sm:text-xl xs:text-xl`}>{original}</h1>
          <p className={`md:text-[25px] text-white font-semibold sm:text-[20px] xs:text-[15px]`}>
            {originalContent}
          </p>
        </div>

        {/* Service List Section */}
        <div className="lg:w-3/5 lg:min-h-[500px] flex justify-center items-center p-8 sm:w-full xs:w-full">
          <ul className="list-none flex flex-wrap gap-4 justify-center p-2">
            {arrays.map(({ id, name }) => (
              <li
                key={id}
                className="text-white md:text-[15px] md:px-4 md:py-2 rounded-md shadow-md md:w-[200px] text-center font-bold hover:scale-105 hover:shadow-lg transition-transform duration-300 sm:text-[12px] sm:px-2 sm:py-1 sm:w-[100px] xs:text-[9px] xs:px-2 xs:py-1 xs:w-[90px] overflow-hidden"
                onClick={isMobile ? () => handleInteraction(id) : null} // Use click for mobile
                onMouseEnter={!isMobile ? () => handleInteraction(id) : null} // Use hover for desktop
                onMouseLeave={!isMobile ? resetContent : null}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;

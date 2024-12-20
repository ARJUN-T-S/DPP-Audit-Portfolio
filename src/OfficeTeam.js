import React, { useState } from 'react';
import HS from './dpp7.jpeg';
import B1 from './image1.jpeg';
import R from './image2.jpeg';
import S from './image3.jpeg';
import M from './image5.jpeg';
import A from './image4.jpeg';
import B2 from './image7.jpeg';
import P from './image8.jpeg';
import S2 from './image9.jpeg';

const OfficeTeam = () => {
  // State to manage the clicked item (for mobile and tablet)
  const [clickedIndex, setClickedIndex] = useState(null);

  const toggleTextVisibility = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null); // Close the card if clicked again
    } else {
      setClickedIndex(index); // Open the card
    }
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center p-4 gap-6"
      id="office"
    >
      {/* Main Head Section */}
      <div className="w-full max-w-5xl bg-[#6552D0] rounded-3xl flex flex-wrap justify-center items-center p-4 gap-6">
        <div className="w-full md:w-2/5 flex justify-center">
          <img src={HS} alt="T.G. Sivakumar" className="w-40 h-40 rounded-3xl object-cover" />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl md:text-3xl text-white font-extrabold text-center">
            Name: T.G. Sivakumar
          </h1>
          <p className="text-lg md:text-2xl text-white font-bold">DOB: 16/07/1967</p>
          <p className="text-lg md:text-2xl text-white font-bold text-center">
            Educational Qualification: B.Com, M.Com, DCAS, BL
          </p>
        </div>
      </div>

      {/* Technical Staff Section */}
      <div className="w-full max-w-5xl bg-[#6552D0] rounded-3xl flex flex-col items-center p-6 gap-6">
        <h1 className="text-xl md:text-3xl text-white font-extrabold underline">
          TECHNICAL STAFFS
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {[
            { name: 'BHARATH.T.S', dob: '15/06/1992', degree: 'BBA', year: '2012', image: B1 },
            { name: 'SANAULLAH F', dob: '06/08/1991', degree: 'B.COM', year: '2014', image: S },
            { name: 'RAJINI.G', dob: '09/05/1989', degree: 'B.COM', year: '2012', image: R },
            { name: 'MAHENDRAN M', dob: '05/06/1995', degree: 'B.COM', year: '2016', image: M },
            { name: 'PRANESH N', dob: '12/10/1995', degree: 'B.COM', year: '2017', image: P },
          ].map((staff, index) => (
            <div
              key={index}
              className="w-60 sm:w-72 h-[250px] rounded-2xl relative group overflow-hidden shadow-lg"
              onClick={() => toggleTextVisibility(index)} // Toggle on click for mobile/tablet
            >
              {/* Image */}
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Text Content - Hover for larger screens, click for mobile/tablets */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-80 text-[#6552D0] font-bold transform transition-transform duration-500 
                ${clickedIndex === index ? 'translate-y-0' : 'translate-y-full'}
                group-hover:translate-y-0`}  // group-hover works for larger screens
              >
                <h2>NAME: {staff.name}</h2>
                <p>DOB: {staff.dob}</p>
                <p>DEGREE: {staff.degree}</p>
                <p>YEAR OF JOINING: {staff.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supporting Staff Section */}
      <div className="w-full max-w-5xl bg-[#6552D0] rounded-3xl flex flex-col items-center p-6 gap-6">
        <h1 className="text-xl md:text-3xl text-white font-extrabold underline">
          SUPPORTING STAFFS
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {[
            { name: 'ARUN KUMAR S', dob: '15/07/1993', degree: 'BCOM', year: '2015', image: A },
            { name: 'BARATH KUMAR V', dob: '11/08/2000', degree: 'B.COM', year: '2016', image: B2 },
            { name: 'SIVA K', dob: '04/06/2001', degree: 'B.COM', year: '2019', image: S2 },
          ].map((staff, index) => (
            <div
              key={index}
              className="w-60 sm:w-72 h-[250px] rounded-2xl relative group overflow-hidden shadow-lg"
              onClick={() => toggleTextVisibility(index)} // Toggle on click for mobile/tablet
            >
              {/* Image */}
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Text Content - Hover for larger screens, click for mobile/tablets */}
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-80 text-[#6552D0] font-bold transform transition-transform duration-500 
                ${clickedIndex === index ? 'translate-y-0' : 'translate-y-full'}
                group-hover:translate-y-0`}  // group-hover works for larger screens
              >
                <h2>NAME: {staff.name}</h2>
                <p>DOB: {staff.dob}</p>
                <p>DEGREE: {staff.degree}</p>
                <p>YEAR OF JOINING: {staff.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficeTeam;

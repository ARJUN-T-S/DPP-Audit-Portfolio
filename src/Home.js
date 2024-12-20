import React, { useState, useEffect } from 'react';
import 'animate.css';
import CA from './CA.png';
import IT from './IT.png';
import LA from './LA.png';
import DPP1 from './DPP.png';

const Home = () => {
  const [initial, setInitial] = useState('display');
  const [initial1, setInitial1] = useState('hidden');

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setInitial('hidden');
    }, 3000);

    return () => clearTimeout(timeout1);
  }, []);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setInitial1(
        'flex flex-col items-center justify-center w-full lg:w-[600px] min-h-[350px] gap-4 animate__animated animate__zoomIn'
      );
    }, 2800);

    return () => clearTimeout(timeout2);
  }, []);

  return (
    <div className="pt-16" id="home">
      <div className="w-full min-h-[600px] flex flex-wrap justify-center items-center p-4 sm:p-6 md:p-8 gap-6">
        {/* Quote Section */}
        <div className="w-full lg:w-[600px] bg-[#6552D0] min-h-[300px] lg:min-h-[400px] rounded-3xl flex justify-center items-center text-white text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] p-6 sm:p-10 lg:p-16 font-bold">
          <p
            className="animate__animated animate__bounceInLeft text-center"
            style={{ animationDuration: '3s' }}
          >
            "Taxation is the price which civilized communities pay for the
            opportunity of remaining civilized." — Albert Bushnell Hart
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[600px] bg-[#6552D0] min-h-[300px] lg:min-h-[400px] rounded-3xl flex items-center justify-center relative overflow-hidden">
          {/* Images with animations */}
          <img
            src={CA}
            alt="CA"
            className={`absolute w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px] animate__animated animate__backInLeft ${initial}`}
            style={{
              animationDuration: '3s',
              top: '35%',
              left: '35%',
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
            }}
          />
          <img
            src={IT}
            alt="IT"
            className={`absolute w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px] animate__animated animate__backInRight ${initial}`}
            style={{
              animationDuration: '3s',
              top: '38%',
              left: '32%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
            }}
          />
          <img
            src={LA}
            alt="LA"
            className={`absolute w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px] animate__animated animate__backInUp ${initial}`}
            style={{
              animationDuration: '3s',
              top: '32%',
              left: '38%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          />

          {/* Centered Logo and Caption */}
          <div className={`${initial1}`}>
            <img src={DPP1} alt="DPP Logo" className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[300px]" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-bold w-[180px] sm:w-[220px] md:w-[250px] text-center p-2 bg-white rounded-xl bg-opacity-10">
              DPP PILLAI & CO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

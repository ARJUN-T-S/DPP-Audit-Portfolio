import React, { useState, useEffect, useRef } from 'react';
import GGF from './dpp1.png';
import GF from './dpp2.png';
import F from './dpp5.png';

const About = () => {
  const [visibleImages, setVisibleImages] = useState({});
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageId = entry.target.id;
            setVisibleImages((prev) => ({ ...prev, [imageId]: true }));
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sectionData = [
    {
      id: 'section1',
      title: 'Humble Beginnings: The Founding by Sri D.Ponnuswamy Pillai',
      img: GGF,
      description:
        "Sri D. Ponnuswamy Pillai, the visionary founder of D.Pillai & Co., originally aspired to serve in the military. However, upon the encouragement of his brother-in-law, Sri Kuppuswamy, he shifted his focus to tax consultancy. Armed with a Diploma in Tax Consultancy, Sri D.Ponnuswamy Pillai established D.Pillai & Co. in 1954. The firm's humble beginnings started with its first client, AAA Bus Service, for whom he provided services for a fee of Rs. 150. At the time, he operated the firm single-handedly, without any staff, showcasing his dedication and determination to build a legacy of excellence in tax services.",
      animation: 'animate__backInLeft',
    },
    {
      id: 'section2',
      title: 'Building Trust Through Generations: Sri T.P Gopalakrishnan Takes Over',
      img: GF,
      description:
        "In 1960, Sri T.P. Gopalakrishnan succeeded his father as the head of D.Pillai & Co., bringing with him a BA degree and a vision for growth. His first fee after assuming leadership was Rs. 250, once again from AAA Bus Service, a loyal client. Over time, Sri T.P. Gopalakrishnan expanded the office, introducing a dedicated team of staff members, including Mr. Santhanam, Mr. Sridharan, and Mr. Radhakrishnan. Under his stewardship, the firm gained several notable clients, including KVS Bus Service, AAA Bus Service, and Sampath PKM. Though retired from full-time work, Sri D. Ponnuswamy Pillai continued to provide light supervision, ensuring the firm’s legacy of excellence remained intact.",
      animation: 'animate__backInRight',
    },
    {
      id: 'section3',
      title: 'Modernizing Tradition: Sri TG Sivakumar at the Helm',
      img: F,
      description:
        "In April 1987, honoring his grandfather's wish, Sri T.G. Sivakumar took control of D.Pillai & Co. alongside his father, Sri T.P. Gopalakrishnan. His first client under this new leadership was Dr. C.R.S. Prasad, with a fee of Rs. 1,500. Sri T.G. Sivakumar brought fresh energy and innovation to the firm, overseeing a significant expansion in staff beginning in 2010. While the firm initially adhered to manual tax return processes, it successfully transitioned to online submissions, keeping pace with the evolving industry. This shift marked a new chapter in the firm's growth and commitment to modern tax practices, ensuring continued service excellence.",
      animation: 'animate__backInLeft',
    },
  ];

  return (
    <div className="w-full flex flex-wrap min-h-[600px] gap-6 p-2 xs:p-4 justify-center" id="about">
      {sectionData.map((section, index) => (
        <div
          key={section.id}
          id={section.id}
          className="w-full xs:w-3/4 sm:w-3/4 lg:w-3/4 min-h-[400px] rounded-3xl flex flex-col p-4 bg-[#6552D0] gap-4"
        >
          <h1 className="text-xl xs:text-2xl sm:text-3xl text-center w-full m-0 text-white">
            {section.title}
          </h1>
          <div className="w-full min-h-[350px] flex xs:flex-col sm:flex-col lg:flex-row xs:place-items-center sm:place-items-center p-2 xs:p-4 gap-4">
            <div className="w-full xs:w-full sm:w-full lg:w-2/5 min-h-[350px] flex justify-center items-center">
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                id={`image-${section.id}`}
                src={section.img}
                alt={`${section.title} Image`}
                className={`opacity-0 max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] max-h-[300px] ${
                  visibleImages[`image-${section.id}`] ? `animate__animated ${section.animation}` : ''
                }`}
                style={{
                  animationDuration: '3s',
                  opacity: visibleImages[`image-${section.id}`] ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out',
                }}
              />
            </div>
            <div className="w-full xs:w-full sm:w-full lg:w-3/5 min-h-[350px] flex flex-wrap justify-center items-center p-4 text-xs xs:text-sm sm:text-lg lg:text-xl font-bold text-white">
              <p>{section.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Chartered Accountants and Legal Advisors Section */}
      <div className="w-full xs:w-3/4 sm:w-3/4 lg:w-3/4 min-h-[400px] bg-[#6552D0] p-4 xs:p-6 rounded-3xl">
        <h1 className="text-white text-xl xs:text-2xl sm:text-3xl lg:text-3xl text-center font-bold underline">
          CHARTERED ACCOUNTANTS AND LEGAL ADVISORS
        </h1>
        <div className="mt-4 xs:mt-6 text-white text-sm xs:text-lg sm:text-xl lg:text-2xl font-bold flex flex-col gap-4">
          <p className="ml-2 xs:ml-4">1. Sri K.Anandapadmanabhan, <span className="text-sm xs:text-lg text-green-500">B.A,B.L</span></p>
          <p className="ml-2 xs:ml-4">2. Sri S.Lakshminarasimhan, <span className="text-sm xs:text-lg text-green-500">M.Com,F.C.A</span></p>
          <p className="ml-2 xs:ml-4">3. Sri W.A.P Thiruthuva Doss, <span className="text-sm xs:text-lg text-green-500">B.Com,F.C.A</span></p>
          <p className="ml-2 xs:ml-4">4. Mrs R.Vimala, <span className="text-sm xs:text-lg text-green-500">B.Com,F.C.A</span></p>
          <p className="ml-2 xs:ml-4">5. Sri S.Amit Kumar, <span className="text-sm xs:text-lg text-green-500">B.Com,F.C.A</span></p>
          <p className="ml-2 xs:ml-4">6. Mrs T.Juliet Monica, <span className="text-sm xs:text-lg text-green-500">B.Com,F.C.A</span></p>
        </div>
      </div>
    </div>
  );
};

export default About;

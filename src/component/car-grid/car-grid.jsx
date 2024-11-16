// import React from 'react';
// import { Download } from 'lucide-react';
// import car1 from '../car-grid/cars14.jpg'
// const cars = [
//   {
//     id: 1,
//     image: car1,
//     name: '1994 SEAT CORDOBA (NL)',
//     year: 1994,
//     pdfUrl: '/sample.pdf' // Replace with actual PDF URLs
//   },
//   // ... other cars with similar structure
// ];

// const CarGrid = () => {
//   const handleDownload = (car) => {
//     // Create a temporary link to trigger the download
//     const link = document.createElement('a');
//     link.href = car.pdfUrl;
//     link.download = `${car.name.toLowerCase().replace(/ /g, '_')}.pdf`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {cars.map((car) => (
//           <div
//             key={car.id}
//             className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
//           >
//             <div className="aspect-w-4 aspect-h-3">
//               <img
//                 src={car.image}
//                 alt={car.name}
//                 className="w-full h-full object-cover"
//               />

//               {/* Overlay with gradient background */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Content container */}
//               <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 {/* Car Information */}
//                 <div className="text-white space-y-1">
//                   <h3 className="font-bold text-sm sm:text-base truncate">{car.name}</h3>
//                   <p className="text-xs sm:text-sm">{car.year}</p>
//                 </div>

//                 {/* Download Button */}
//                 <button
//                   onClick={() => handleDownload(car)}
//                   className="mt-2 flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-black rounded-lg py-2 px-4 text-sm transition-colors duration-300"
//                 >
//                   <Download className="w-4 h-4" />
//                   <span className="font-medium">Download PDF</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CarGrid;

import React from "react";
import { Download } from "lucide-react";
import car1 from "../car-grid/cars14.jpg";
import car2 from "../car-grid/card16.jpg";
import car3 from "../car-grid/cars2.jpg";
import car4 from "../car-grid/cars7.jpg";
import car5 from "../car-grid/cars14.jpg";
import car6 from "../car-grid/cars19.jpg";
import car7 from "../car-grid/cars20.jpg";
import car9 from "../car-grid/cars23.jpg";
import car8 from "../car-grid/cars24.jpg";
import car10 from "../car-grid/cars25.jpg";
import car11 from "../car-grid/cars26.jpg";
import car12 from "../car-grid/cars26.jpg";
import car13 from "../car-grid/cars21.jpg";
import car14 from "../car-grid/cars8.jpg";
import car15 from "../car-grid/cars7.jpg";

const cars = [
  {
    id: 1,
    image: car1,
    name: "1994 SEAT CORDOBA (NL)",
    year: 1994,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 2,
    image: car2,
    name: "1973 ALFA ROMEO MONTREAL (DE)",
    year: 1973,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 3,
    image: car3,
    name: "1969 AUDI SUPER 90 (DE)",
    year: 1969,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 4,
    image: car4,
    name: "1972 CITROEN SM (UK)",
    year: 1972,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 5,
    image: car5,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 6,
    image: car6,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 7,
    image: car7,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 8,
    image: car8,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 9,
    image: car10,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 10,
    image: car11,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 11,
    image: car12,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  {
    id: 12,
    image: car13,
    name: "2024 RENAULT 4 (INT)",
    year: 2024,
    pdfUrl: "/sample.pdf",
  },
  // {
  //   id: 13,
  //   image: car13,
  //   name: '2024 RENAULT 4 (INT)',
  //   year: 2024,
  //   pdfUrl: '/sample.pdf'
  // }
  // Add other cars as needed
];

const CarGrid = () => {
  const handleDownload = (car) => {
    const link = document.createElement("a");
    link.href = car.pdfUrl;
    link.download = `${car.name.toLowerCase().replace(/ /g, "_")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="relative group">
              <div className="aspect-w-16 aspect-h-10">
                <img src={car.image} alt={car.name} className="w-full h-96" />
              </div>

              {/* Hover Overlay */}
              {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => handleDownload(car)}
                  className="flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-medium rounded-lg py-3 px-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </button>
              </div> */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content container */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Car Information */}
                <div className="text-white space-y-1">
                  <h3 className="font-bold text-sm sm:text-base truncate">
                    {car.name}
                  </h3>
                  <p className="text-xs sm:text-sm">{car.year}</p>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(car)}
                  className="mt-2 flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-black rounded-lg py-2 px-4 text-sm transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Download PDF</span>
                </button>
              </div>
            </div>

            {/* Car Information */}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {car.name}
              </h3>
              <div className="flex items-center justify-between">
                {/* <p className="text-gray-600">Year: {car.year}</p> */}
                <button
                  onClick={() => handleDownload(car)}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGrid;

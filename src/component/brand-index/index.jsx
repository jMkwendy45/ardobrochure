import React from "react";
import { Folder } from "lucide-react";

const brands = [
  "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti",
  "Buick", "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Dacia", "Daihatsu",
  "Datsun", "Dodge", "Ferrari", "Fiat", "Ford", "GMC", "Holden", "Honda",
  "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Koenigsegg", "Lada",
  "Lamborghini", "Lancia", "Land Rover", "Lexus", "Lincoln", "Lotus", "Mahindra",
  "Maserati", "Mazda", "McLaren", "Mercedes", "MG", "Mini", "Mitsubishi",
  "Morgan", "Nissan", "Opel", "Pagani", "Peugeot", "Porsche", "Proton",
  "Renault", "Rolls-Royce", "Seat", "Skoda", "Smart", "SsangYong KGM", "Subaru",
  "Suzuki", "Tata", "Toyota", "Vauxhall", "Volkswagen", "Volvo", "Other Brands",
  "Oldies"
];

const BrandIndex = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Car Brands</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center p-4 bg-white shadow rounded-lg hover:shadow-md transition cursor-pointer"
          >
            <Folder className="text-red-500 w-6 h-6 mr-3" />
            <span className="text-gray-800 font-medium">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandIndex;
// import React, { useState } from "react";
// import { Folder, FileText } from "lucide-react";

// const brandData = {
//   Acura: [
//     {
//       category: "CDX",
//       files: [
//         { year: 2020, name: "CDX (CN)", link: "/path/to/2020-CDX.pdf" },
//         { year: 2021, name: "CDX Hybrid (CN)", link: "/path/to/2021-CDX-Hybrid.pdf" },
//       ],
//     },
//     {
//       category: "ILX",
//       files: [
//         { year: 2020, name: "ILX (US)", link: "/path/to/2020-ILX.pdf" },
//         { year: 2021, name: "ILX (CA)", link: "/path/to/2021-ILX.pdf" },
//       ],
//     },
//     {
//       category: "Integra",
//       files: [
//         { year: 1997, name: "Integra (US)", link: "/path/to/1997-Integra.pdf" },
//         { year: 2022, name: "Integra Type S (US)", link: "/path/to/2022-Integra-Type-S.pdf" },
//       ],
//     },
//     {
//       category: "MDX",
//       files: [
//         { year: 2020, name: "MDX (US)", link: "/path/to/2020-MDX.pdf" },
//         { year: 2021, name: "MDX (CA)", link: "/path/to/2021-MDX.pdf" },
//       ],
//     },
//     {
//       category: "Model Range",
//       files: [
//         { year: 1999, name: "Model Range (US)", link: "/path/to/1999-Model-Range.pdf" },
//         { year: 2000, name: "Model Range (CA)", link: "/path/to/2000-Model-Range.pdf" },
//       ],
//     },
//     {
//       category: "NSX",
//       files: [
//         { year: 1990, name: "NSX (US)", link: "/path/to/1990-NSX.pdf" },
//         { year: 2022, name: "NSX Type S (US)", link: "/path/to/2022-NSX-Type-S.pdf" },
//       ],
//     },
//   ],

// };

// const BrandIndex = () => {
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-6 text-center">Car Brands</h1>
//       {selectedBrand ? (
//         <div>
//           <button
//             className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={() => setSelectedBrand(null)}
//           >
//             Back to Brands
//           </button>
//           <h2 className="text-xl font-semibold mb-4">{selectedBrand}</h2>
//           {brandData[selectedBrand].map((category, index) => (
//             <div key={index} className="mb-6">
//               <h3 className="text-lg font-medium mb-2">{category.category}</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {category.files.map((file, fileIndex) => (
//                   <a
//                     key={fileIndex}
//                     href={file.link}
//                     download
//                     className="flex items-center p-4 bg-white shadow rounded-lg hover:shadow-md transition"
//                   >
//                     <FileText className="text-red-500 w-6 h-6 mr-3" />
//                     <span className="text-gray-800 font-medium">{file.year} - {file.name}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           {Object.keys(brandData).map((brand, index) => (
//             <div
//               key={index}
//               className="flex items-center p-4 bg-white shadow rounded-lg hover:shadow-md transition cursor-pointer"
//               onClick={() => setSelectedBrand(brand)}
//             >
//               <Folder className="text-red-500 w-6 h-6 mr-3" />
//               <span className="text-gray-800 font-medium">{brand}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrandIndex;

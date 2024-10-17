// // pages/index.js
// "use client"
// import React from 'react';

// const dataList = [
//   { name: 'Mohit', state: 'Uttar Pradesh', city: 'Lucknow' },
//   { name: 'Rohan', state: 'Maharashtra', city: 'Mumbai' },
//   // Add more entries here...
// ];

// export default function Home() {
//   const handleClick = (person:any) => {
//     const { city, state } = person;
//     // Create a subdomain format like 'lucknow-up'
//     const subDomain = `${city.toLowerCase()}-${state.toLowerCase().replace(/\s/g, '')}.anshu.com`;
//     // Redirect to the subdomain
//     window.location.href = `https://${subDomain}`;
//   };

//   return (
//     <div>
//       <h1>Select a Person</h1>
//       <ul>
//         {dataList.map((person, index) => (
//           <li key={index} onClick={() => handleClick(person)}  style={{cursor:'pointer'}}>
//             {person.name} ({person.city}, {person.state})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }









"use client"
// pages/index.js
import React from 'react';

const stateList = [
  { state: 'Uttar Pradesh', code: 'up' },
  { state: 'Maharashtra', code: 'mh' },
  // Add more states here...
];

export default function Home() {
  const handleStateClick = (state) => {
    // Create subdomain in format: 'up-anshu.com'
    const subDomain = `${state.code}.whereareyou-red.vercel.app`;
    // Redirect to the state's subdomain
    window.location.href = `https://${subDomain}`;
  };

  return (
    <div>
      <h1>Select a State</h1>
      <ul>
        {stateList.map((stateItem, index) => (
          <li key={index} onClick={() => handleStateClick(stateItem)} style={{cursor:'pointer'}}>
            {stateItem.state}
          </li>
        ))}
      </ul>
    </div>
  );
}

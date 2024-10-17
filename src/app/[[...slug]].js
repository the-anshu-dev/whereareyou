// import { useEffect, useState } from 'react';

// export default function SubDomainPage() {
//   const [locationData, setLocationData] = useState<any>({});
  
//   useEffect(() => {
//     // Get the hostname (e.g., lucknow-up.anshu.com)
//     const { host } = window.location;
    
//     // Extract subdomain part (lucknow-up)
//     const subdomain = host.split('.')[0];
    
//     if (subdomain && subdomain !== 'anshu') {
//       // Split the subdomain to get city and state
//       const [city, stateCode] = subdomain.split('-');
      
//       setLocationData({
//         city: city.charAt(0).toUpperCase() + city.slice(1),
//         stateCode: stateCode.toUpperCase(),
//       });
//     } else {
//       setLocationData({ city: 'Unknown', stateCode: 'Unknown' });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to {locationData?.city}, {locationData.stateCode}</h1>
//     </div>
//   );
// }








"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Sample city data for each state
const cityData = {
  up: ['Lucknow', 'Kanpur', 'Varanasi'],
  mh: ['Mumbai', 'Pune', 'Nagpur'],
};

export default function SubDomainPage() {
  const [cities, setCities] = useState([]);
  const [stateCode, setStateCode] = useState('');
  const router = useRouter();
  const { slug } = router.query; // This will capture the subdomain or path
console.log(slug);
 
  useEffect(() => {
    // Extract the state and city from the hostname
    const { host } = window.location;
    const subdomainParts = host.split('.')[0].split('-');

    if (subdomainParts.length === 1) {
      // This is the state subdomain (e.g., "up.anshu.com")
      const state = subdomainParts[0];
      setStateCode(state);
      setCities(cityData[state] || []);
    } else if (subdomainParts.length === 2) {
      // This is the city-state subdomain (e.g., "lucknow-up.anshu.com")
      const city = subdomainParts[0];
      const state = subdomainParts[1];
      setStateCode(`${city}-${state}`);
    }
  }, []);

  const handleCityClick = (city) => {
    // Redirect to the city-state subdomain like 'lucknow-up.anshu.com'
    const subDomain = `${city.toLowerCase()}-${stateCode}.whereareyou-red.vercel.app`;
    window.location.href = `https://${subDomain}`;
  };

  return (
    <div>
      <h1>
        {stateCode.includes('-') ? 'City: ' : 'Select a City in '}
        {stateCode.toUpperCase()}
      </h1>

      {stateCode && !stateCode.includes('-') && (
        <ul>
          {cities.map((city, index) => (
            <li key={index} onClick={() => handleCityClick(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}

      {stateCode.includes('-') && <p>Welcome to {stateCode.toUpperCase()}</p>}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
// import { useCities } from "../contexts/CitiesContext";

function PopularDest() {
  const [accessToken, setAccessToken] = useState(null);
  const [poiData, setPoiData] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const formData = {
        grant_type: 'client_credentials',
        client_id: 'QtTQnC4bUmA0FdOfS1bwetn4XOygC9o9',
        client_secret: 'PTUETL4ZBvQAa7Oc',
      };

      const urlEncodedData = new URLSearchParams(formData).toString();

      try {
        const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
          method: 'POST',
          body: urlEncodedData,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch token');
        }

        const result = await response.json();
        setAccessToken(result.access_token);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchAccessToken();
  }, []); 

  useEffect(() => {
    const fetchData = async () => {
      if (!accessToken) {
        return;
      }

      const queryParams = new URLSearchParams({
        latitude: '12.95233',
        longitude: '77.58888',
        radius: '5',
        'page[limit]': '10',
        'page[offset]': '0',
      });

      try {
        const response = await fetch(
          `https://test.api.amadeus.com/v1/reference-data/locations/pois?${queryParams.toString()}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setPoiData(result);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, [accessToken]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!accessToken) {
  //       return;
  //     }
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const latitude = urlParams.get('lat');
  //     const longitude = urlParams.get('lng');
  //     console.log(latitude);
  //     console.log(longitude);

  //     const bangalore_lat = 12.95233;
  //     const banalore_lng = 77.58888;

  //     if (!latitude || !longitude) {
  //       console.error('Latitude and/or longitude not found in the URL');
  //       return;
  //     }

  //     const queryParams = new URLSearchParams({
  //       latitude : bangalore_lat,
  //       longitude : banalore_lng,
  //       radius: '5',
  //       'page[limit]': '7',
  //       'page[offset]': '0',
  //     });

  //     try {
  //       const response = await fetch(
  //         `https://test.api.amadeus.com/v1/reference-data/locations/pois?${queryParams.toString()}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error('Failed to fetch data');
  //       }

  //       const result = await response.json();
  //       setPoiData(result);
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, [accessToken]); 

  return (
    <div>
      <h3>Popular Destinations near Bangalore are(Using free API with limited data availability. Can be scaled later if required by purchasing enterprise subscription):</h3>
      {poiData && (
        <ul>
          {poiData.data.map((poi) => (
            <li key={poi.id}>{poi.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PopularDest;

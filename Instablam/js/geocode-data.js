import {latitude,longitude} from './capturePhoto.js';
export let place ='';

export const fetchData = async ()=>{
  const url =`https://geocode.xyz/${latitude},${longitude}?json=1`;
   // console.log(` Latitude: ${latitude} °, Longitude: ${longitude} °`);
   // const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b756363ff58242588fc1d3ba17062641`;
  //fetch function
  try{
        await fetch(url,{method: 'GET'}
        ).then(response => {
          return response.json();
        }).then(data => {
            pickSome(data);
        }).catch(error => {
          console.error('There\'s an error with the API. ', error);
        });
      //console.log('url: ',url);
  }catch(err){
      console.log('Geo_location error: ', err);
  }
}

const pickSome = (data)=>{
      try{
        place =   data.country +' , '+ data.city;
      }catch(e){
        console.log('Error with data from url: ', e);
      }
      

     // place = data.results[0].components.country +' , '+ data.results[0].components.city_district;
     // console.log('Place : ',place);
    //setTimeout(()=>{},1000);
}
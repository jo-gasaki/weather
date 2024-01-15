import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
function Weather() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    fetch(`${process.env.REACT_APP_OW_API_URL}/weather/?q=Tokyo&APPID=${process.env.REACT_APP_OW_API_KEY}&units=metric`)
    .then(res => res.json())
    .then(result => {
      setData(result);
      setLoading(false);
  },[data])});

  if (loading) {
    return <div></div>;
  }

  
    return (

      <div className="p-4">
      <div className="bg-gradient-to-r from-red-500 to-blue-300
                      w-96 h-56 m-auto rounded-xl shadow-2xl 
                      transform hover:scale-110 transition-transform
                      text-white relative">           
        <div className="w-full px-8 absolute top-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light">都市名</p>
              <p className="text-lg font-medium tracking-widest">
              { data.name }
              </p>
            </div>
            <div>
              画像
            </div>
          </div>
          <div className="pt-2">
            <p className="font-light">Weather Condition</p>
            <p className="text-lg font-medium tracking-widest">
            { data.weather[0].main }
            </p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div>
                <p className="font-light text-xs">
                    日にち
                </p>
                <p className="font-bold tracking-more-wider text-sm">
                {dayjs(data.ts).format('YYYY-MM-DD')}
                </p>
              </div>
              <div>
                <p className="font-light text-xs">
                  Temprature
                </p>
                <p className="font-bold tracking-more-wider text-sm">
                  20°C
                </p>
              </div>
              <div>
                <p className="font-light text-xs">
                  Humidity
                </p>
                <p className="font-bold tracking-more-wider text-sm">
                  40%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default Weather
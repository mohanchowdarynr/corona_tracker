import React, { useEffect, useState } from 'react'
import { fetchDailyData } from '../../api';

const Chart = () => {
    const [dailyData,setDailyData] = useState();
    

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);
     return (
        <div>
           
        </div>
    )
}

export default Chart
import axios from "axios";

export const fetchData = async () => {
try{
     const { data : { confirmed,deaths,recovered,lastUpdate }} = await axios.get("https://covid19.mathdro.id/api");
     return { confirmed,deaths,recovered,lastUpdate };
}
catch (error){
    console.log(error);
}
}

export const fetchDailyData = async () => {
  try{
      const fetchData = awaitaxios.get("https://covid19.mathdro.id/api/daily");

      return fetchData
  }
  catch(error) {
     console.log(error);
  }
}
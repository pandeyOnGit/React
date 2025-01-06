const baseURL = "http://api.weatherapi.com/v1/current.json?key=abe55bf231b146e2ba9104135250501";

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&api=yes`);

    return await response.json();
}
export const getWeatherDataForLocation = async(lat , lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&api=yes`);

    return await response.json();
}
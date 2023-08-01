const apiKey = "lZdpBnO8p6H56U29LhS1ks9RheWmnET6";

export const locationsSearchUrl = (userInput: string) =>
  `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${userInput}&language=en-us`;
export const currentConditionsUrl = (locationKey: string) =>
  `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
export const foreCastUrl = (locationKey: string, isMetric: boolean) =>
  `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${isMetric}`;

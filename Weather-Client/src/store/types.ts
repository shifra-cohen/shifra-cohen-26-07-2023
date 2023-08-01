export const GET_WEATHER = "GET_WEATHER";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export const FAVORITE_ADD_ITEM_SUCCESS = "FAVORITE_ADD_ITEM_SUCCESS";
export const FAVORITE_REMOVE_ITEM_SUCCESS = "FAVORITE_REMOVE_ITEM_SUCCESS";

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  LocalSource: {
    Id: number;
    Name: string;
    WeatherCode: string;
  };
  IsDayTime: boolean;
  Temperature: {
    Metric: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Imperial: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  RealFeelTemperature: object;
  RealFeelTemperatureShade: object;
  RelativeHumidity: number;
  DewPoint: object;
  Wind: {
    Direction: {
      Degrees: number;
      English: string;
      Localized: string;
    };
    Speed: object;
  };
  WindGust: {
    Speed: object;
  };
  UVIndex: number;
  UVIndexText: string;
  Visibility: object;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: object;
  Pressure: object;
  PressureTendency: {
    LocalizedText: string;
    Code: string;
  };
  Past24HourTemperatureDeparture: object;
  ApparentTemperature: object;
  WindChillTemperature: object;
  WetBulbTemperature: object;
  Precip1hr: object;
  PrecipitationSummary: {
    Precipitation: object;
    PastHour: object;
    Past3Hours: object;
    Past6Hours: object;
    Past9Hours: object;
    Past12Hours: object;
    Past18Hours: object;
    Past24Hours: object;
  };
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: object;
      Maximum: object;
    };
    Past12HourRange: {
      Minimum: object;
      Maximum: object;
    };
    Past24HourRange: {
      Minimum: object;
      Maximum: object;
    };
  };
  MobileLink: string;
  Link: string;
  HasPrecipitation: boolean;
  PrecipitationType: string;
  IndoorRelativeHumidity: boolean;
}

export interface searchedValue {
  key: string;
  label: string;
}

export interface FavoriteWather {
  cityName: string;
  weatherData: WeatherData | null;
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface CurrentAndForeCast {
  searchedValue: searchedValue;
  current: WeatherData;
  foreCast: foreCast;
}

export interface WeatherState {
  data: CurrentAndForeCast | null;
  error: string;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: CurrentAndForeCast;
}

interface AddFavoriteAction {
  type: typeof FAVORITE_ADD_ITEM_SUCCESS;
  payload: FavoriteWather;
}

interface RemoveFavoriteAction {
  type: typeof FAVORITE_REMOVE_ITEM_SUCCESS;
  payload: FavoriteWather;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type WeatherAction = GetWeatherAction | SetErrorAction;
export type FavoriteAction = AddFavoriteAction | RemoveFavoriteAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}

export interface foreCast {
  Headline: {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
  };
  DailyForecasts: {
    map(
      arg0: (forCast: dailyForeCast) => import("react/jsx-runtime").JSX.Element
    ): import("react").ReactNode;
    Date: string;
    EpochDate: number;
    Sun: {
      Rise: string;
      EpochRise: number;
      Set: string;
      EpochSet: number;
    };
    Moon: {
      Rise: string;
      EpochRise: number;
      Set: string;
      EpochSet: number;
      Phase: string;
      Age: number;
    };
    Temperature: {
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    RealFeelTemperature: {
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    RealFeelTemperatureShade: {
      Minimum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Maximum: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    HoursOfSun: number;
    DegreeDaySummary: {
      Heating: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Cooling: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    AirAndPollen: {
      Name: string;
      Value: number;
      Category: string;
      CategoryValue: number;
      Type: string;
    };
    Day: {
      Icon: number;
      IconPhrase: string;
      LocalSource: {
        Id: number;
        Name: string;
        WeatherCode: string;
      };
      HasPrecipitation: boolean;
      PrecipitationType: string;
      PrecipitationIntensity: string;
      ShortPhrase: string;
      LongPhrase: string;
      PrecipitationProbability: number;
      ThunderstormProbability: number;
      RainProbability: number;
      SnowProbability: number;
      IceProbability: number;
      Wind: {
        Speed: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
        Direction: {
          Degrees: number;
          Localized: string;
          English: string;
        };
      };
      WindGust: {
        Speed: {
          Value: number;
          Unit: string;
          UnitType: number;
        };
      };
      TotalLiquid: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Rain: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Snow: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Ice: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      HoursOfPrecipitation: number;
      HoursOfRain: number;
      CloudCover: number;
      Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    Night: {
      Icon: number;
      IconPhrase: string;
      LocalSource: {
        Id: number;
        Name: string;
        WeatherCode: string;
      };
      HasPrecipitation: boolean;
      PrecipitationType: string;
      PrecipitationIntensity: string;
      ShortPhrase: string;
      LongPhrase: string;
      PrecipitationProbability: number;
      ThunderstormProbability: number;
      RainProbability: number;
      SnowProbability: number;
      IceProbability: number;
      Wind: {
        Speed: object;
        Direction: object;
      };
      WindGust: {
        Speed: object;
      };
      TotalLiquid: object;
      Rain: object;
      Snow: object;
      Ice: object;
      HoursOfPrecipitation: number;
      HoursOfRain: number;
      CloudCover: number;
      Evapotranspiration: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      SolarIrradiance: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    Sources: string;
    MobileLink: string;
    Link: string;
  };
}

export interface dailyForeCast {
  Date: string;
  EpochDate: number;
  Sun: {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
  };
  Moon: {
    Rise: string;
    EpochRise: number;
    Set: string;
    EpochSet: number;
    Phase: string;
    Age: number;
  };
  Temperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  RealFeelTemperature: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  RealFeelTemperatureShade: {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  HoursOfSun: number;
  DegreeDaySummary: {
    Heating: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Cooling: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  AirAndPollen: {
    Name: string;
    Value: number;
    Category: string;
    CategoryValue: number;
    Type: string;
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    LocalSource: {
      Id: number;
      Name: string;
      WeatherCode: string;
    };
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
    ShortPhrase: string;
    LongPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: {
      Speed: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
      Direction: {
        Degrees: number;
        Localized: string;
        English: string;
      };
    };
    WindGust: {
      Speed: {
        Value: number;
        Unit: string;
        UnitType: number;
      };
    };
    TotalLiquid: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Rain: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Snow: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Ice: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    CloudCover: number;
    Evapotranspiration: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    SolarIrradiance: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    LocalSource: {
      Id: number;
      Name: string;
      WeatherCode: string;
    };
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
    ShortPhrase: string;
    LongPhrase: string;
    PrecipitationProbability: number;
    ThunderstormProbability: number;
    RainProbability: number;
    SnowProbability: number;
    IceProbability: number;
    Wind: {
      Speed: object;
      Direction: object;
    };
    WindGust: {
      Speed: object;
    };
    TotalLiquid: object;
    Rain: object;
    Snow: object;
    Ice: object;
    HoursOfPrecipitation: number;
    HoursOfRain: number;
    CloudCover: number;
    Evapotranspiration: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    SolarIrradiance: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  };
  Sources: string;
  MobileLink: string;
  Link: string;
}

export interface autocompleteValue {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

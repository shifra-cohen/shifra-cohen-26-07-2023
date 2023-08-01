import { useState } from "react";
import styles from "./searchField.module.css";
import { locationsSearchUrl } from "../../accuWeatherApi/config";
import { AsyncPaginate } from "react-select-async-paginate";
import { SingleValue } from "react-select";
import { SET_ERROR, autocompleteValue } from "../../store/types";
import { searchedValue } from "../../store/types";
import { useDispatch } from "react-redux";
import { setAlert } from "../../store/actions/alertActions";

interface ISearchFieldProps {
  onSearch: (newValue: searchedValue) => void;
}

const SearchField = ({ onSearch }: ISearchFieldProps) => {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState<searchedValue | null>(null);

  async function loadOptions(inputValue: string) {
    if (inputValue) {
      try {
        const response = await fetch(locationsSearchUrl(inputValue));

        if (!response.ok) {
          const resData: any = await response.json();
          throw new Error(resData.message);
        }

        const json = await response.json();

        return {
          options: json.map((city: autocompleteValue) => ({
            key: city.Key,
            label: `${city.LocalizedName} ${city.Country.ID}`,
          })),
        };
      } catch (err: any) {
        dispatch<any>(setAlert(err.message));
      }
    }
    return { options: [] };
  }

  const handleChange = (newValue: SingleValue<searchedValue>) => {
    setSearchInput(newValue);
    onSearch(newValue as searchedValue);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={searchInput}
      onChange={handleChange}
      loadOptions={loadOptions}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      className={styles.searchField}
    />
  );
};

export default SearchField;

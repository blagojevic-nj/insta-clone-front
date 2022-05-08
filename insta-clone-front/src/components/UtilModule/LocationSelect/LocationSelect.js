import { useState } from "react";
import axios from "axios";

export const LocationSelect = ({ setLocation }) => {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    setAddress(e.target.value);
    const apiKey = "f3054a1d87444384a7e9f1465229d975";
    var url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
      e.target.value
    )}&limit=5&apiKey=${apiKey}`;
    axios.get(url).then((result) => {
      setSuggestions(result.data.features);
    });
  };

  const handleSelect = (properties) => {
    const newLocation = {
      state: properties.country,
      region: properties.state,
      locationName: properties.formatted,
      longitude: properties.lon,
      latitude: properties.lat,
    };

    setLocation(newLocation);
    setSuggestions([]);
    setAddress(properties.formatted);
  };

  return (
    <div>
      <div>
        <div className="form-group mb-2">
          <input
            type={"text"}
            className="form-control"
            placeholder="Place"
            onChange={handleChange}
            value={address}
          />
        </div>
        <div>
          {suggestions.map((suggestion, id) => {
            return (
              <div key={id}>
                <span
                  className="dropdown-item"
                  onClick={() => handleSelect(suggestion.properties)}
                >
                  {suggestion.properties.formatted}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LocationSelect;

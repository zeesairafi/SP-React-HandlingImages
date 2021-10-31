import countries from "../countries";
import { makeAutoObservable } from "mobx";
import axios from "axios";

class CountryStore {
  constructor() {
    makeAutoObservable(this);
    //this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  // Properties => variable, array, object, boolean
  countries = [];

  fetchAllCountries = () => {
    this.countries = countries;
  };

  createCountry = async (newCountry) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/countries",
        newCountry
      );
      this.countries.push(response.data);
    } catch (error) {}
  };

  deleteAllCountries = () => {
    this.countries = [];
  };

  deleteCountry = async (countryId) => {
    try {
      // Backend Delete
      await axios.delete(`http://localhost:8000/api/countries/${countryId}`);
      // Frontend Delete
      this.countries = this.countries.filter((country) => {
        if (country.id !== countryId) return true;
        else return false;
      });
    } catch (error) {
      console.log("CountryStore -> deleteCountry -> error", error);
    }
  };

  updateCountry = async (updatedCountry, countryId) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/countries/${countryId}`,
        updatedCountry
      );
      this.countries = this.countries.map((country) => {
        if (country.id === countryId) {
          return res.data;
        } else {
          return country;
        }
      });
      // this.countries = this.countries.map((country) =>
      //   country.id === countryId ? res.data : country
      // );
    } catch (error) {
      console.log("CountryStore -> updateCountry -> error", error);
    }
  };

  fetchCountries = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/countries");
      this.countries = response.data;
    } catch (error) {
      console.log("CountryStore -> fetchCountries -> error", error);
    }
  };
}

const countryStore = new CountryStore();
countryStore.fetchCountries();
// It will only call this function when the app first starts

export default countryStore;

// delete button
// when clicking button country is removed

// Method: GET
// Path or URL: http://localhost:8000/api/countries

// axios.METHOD(URL, BODY)

// GET: Fetching Data
// axios.get("http://localhost:8000/api/countries");
// Return data

// POST => It takes a BODY, and is used when we Send Data (Create)
// axios.post("http://localhost:8000/api/countries", newObject);
// If I'm creating, it will return new object

// PUT =>  It takes a BODY, and is used to Update Data. We must pass an ID.
// axios.put(`http://localhost:8000/api/countries/${ID}`, updatedObject);
// If I'm updating, it will return updated object

// DELETE => Delete some data. We must pass an ID.
// axios.delete(`http://localhost:8000/api/countries/${ID}`);
// It returns nothing

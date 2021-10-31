import React from "react";
import { useParams } from "react-router";
import countryStore from "../stores/countryStore";

function CountryDetail() {
  const countrySlug = useParams().countrySlug;

  const country = countryStore.countries.find(
    (_country) => countrySlug === _country.slug
  );
  //   const foundCountry = countryStore.countries.find((_country) => {
  //     return countrySlug === _country.slug;
  //   });

  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  );
}

export default CountryDetail;

// /countries/7464785749
// /countries/Swirzer%20Land
// /countries/switzer-land

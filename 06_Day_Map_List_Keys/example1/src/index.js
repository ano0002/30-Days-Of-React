import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const Country = ({country, population }) => {
  const maxPop = Math.max(...tenHighestPopulation.map((country) => country.population));
  return (
    <tr>
      <td>{country}</td>
      <td>
        <progress id="file" max={maxPop} value={population} />
        {population}
      </td>
    </tr>
  );
}

const App = () => {
  return (
    <div className="App">
      <h1>Top 10 Countries by Population</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {tenHighestPopulation.map((country, index) => (
            <Country key={index} country={country.country} population={country.population} />
          ))} 
        </tbody>
      </table>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

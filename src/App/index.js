// @flow
import * as React from 'react';
import Results from 'App/Results';
import SavedProperties from 'App/SavedProperties';

const App = (): React.Node => {
  const [results, setResults] = React.useState([]);
  const [saved, setSaved] = React.useState([]);

  const getData = () => {
    fetch('./data.json').then((res) => {
      return res.json();
    }).then((data) => {
      const { results, saved } = data;
      setResults(results);
      setSaved(saved);
    }).catch((err) => {
      console.error(err);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Results results={results} saved={saved} setSaved={setSaved}/>
      <SavedProperties saved={saved} setSaved={setSaved}/>
    </div>
  )
};

export default App;

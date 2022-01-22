import SearchBar from './Components/SearchBar.js'
import Users from './db.json'

import './App.css'

function App() {

	return (
		<div>
			<SearchBar data={Users} />
		</div>
  	);
}

export default App;

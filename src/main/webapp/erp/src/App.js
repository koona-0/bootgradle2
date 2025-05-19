import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './Menu';	//default 쓰면 중괄호 안써도됨 
import { Foot } from './Foot';
import { Corp } from './Corp';

//Controller의 역할 
function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/corp" element={<Corp/>}/>
			</Routes>
			<Foot />
		</>
	);
}

export default App;
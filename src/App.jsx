import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState } from 'react';

function App() {
	const [isToggled, setIsToggled] = useState(false);
	return (
		<div className='app'>
			<Header />
			{isToggled ? (
				<CreateCourse />
			) : (
				<Courses onClick={() => setIsToggled(!isToggled)} />
			)}
		</div>
	);
}

export default App;

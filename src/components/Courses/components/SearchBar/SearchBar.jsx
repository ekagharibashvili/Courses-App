import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

function SearchBar() {
	return (
		<div>
			<Input type='text' placeholder='Input course name...' />
			<Button className='button' buttonText='Search' />
		</div>
	);
}

export default SearchBar;

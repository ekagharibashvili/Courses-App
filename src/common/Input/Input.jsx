import './Input.css';

function Input({ labelText, placeholder, onChange, type }) {
	return (
		<label>
			{labelText}
			<input type={type} placeholder={placeholder} onChange={onChange} />
		</label>
	);
}

export default Input;

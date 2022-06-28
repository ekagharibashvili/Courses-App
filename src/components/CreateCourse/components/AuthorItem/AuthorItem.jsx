import { mockedAuthorsList } from '../../../../constants';
import Button from '../../../../common/Button/Button';

function AuthorItem() {
	return (
		<div>
			{mockedAuthorsList.map((author) => {
				return (
					<>
						<p>{author.name}</p>
						<Button buttonText='Add author'></Button>
					</>
				);
			})}
		</div>
	);
}

export default AuthorItem;

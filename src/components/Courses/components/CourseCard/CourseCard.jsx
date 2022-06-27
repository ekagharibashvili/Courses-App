import getCourseDuration from '../../../../helpers/getCourseDuration';
import Button from '../../../../common/Button/Button';

function CourseCard({ title, duration, creationDate, description, authors }) {
	return (
		<>
			<h1>{title}</h1>
			<p>
				Duration: <time>{getCourseDuration(duration)}</time>
			</p>
			<p>
				Created: <time> {creationDate}</time>
			</p>
			<h3>
				Authors:{' '}
				{authors.map((author) => (
					<p>{author}</p>
				))}
			</h3>
			<p>{description}</p>

			<Button>Show course</Button>
		</>
	);
}

export default CourseCard;

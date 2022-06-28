import getCourseDuration from '../../../../helpers/getCourseDuration';
import Button from '../../../../common/Button/Button';
import formatDate from '../../../../helpers/formatCreationDate';
import './CourseCard.css';

function CourseCard({ title, duration, creationDate, description, authors }) {
	return (
		<div className='courseCard'>
			<div clasName='cardStart'>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
			<div className='cardEnd'>
				<div>
					<b> Authors: </b>
					{authors.map((author) => (
						<p>{author},</p>
					))}
				</div>
				<p>
					<b>Duration: </b> <time>{getCourseDuration(duration)}</time>
				</p>
				<p>
					<b>Created:</b> <time> {formatDate(creationDate)}</time>
				</p>

				<Button buttonText='Show course'></Button>
			</div>
		</div>
	);
}

export default CourseCard;

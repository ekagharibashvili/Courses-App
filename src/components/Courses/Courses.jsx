import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../constants';
import { mockedAuthorsList } from '../../constants';
import { isAuthor } from '../../helpers/isAuthor';
import Button from '../../common/Button/Button';
import SearchBar from '../Courses/components/SearchBar/SearchBar';
import './Courses.css';

function Courses({ onClick }) {
	return (
		<div>
			<div className='header2'>
				<SearchBar />
				<Button buttonText='Add new course' onClick={onClick} />
			</div>
			{mockedCoursesList.map((course) => {
				return (
					<CourseCard
						title={course.title}
						description={course.description}
						duration={course.duration}
						creationDate={course.creationDate}
						authors={isAuthor(course.authors, mockedAuthorsList)}
					></CourseCard>
				);
			})}
		</div>
	);
}

export default Courses;

import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../constants';
import { mockedAuthorsList } from '../../constants';
import { isAuthor } from '../../helpers/isAuthor';

function Courses() {
	return mockedCoursesList.map((course) => {
		return (
			<CourseCard
				title={course.title}
				description={course.description}
				duration={course.duration}
				creationDate={course.creationDate}
				authors={isAuthor(course.authors, mockedAuthorsList)}
			></CourseCard>
		);
	});
}

export default Courses;

exports.isAuthor = (authorIds, authorsArr) => {
	let courseAuthors = [];
	for (let i = 0; i < authorIds.length; i++) {
		for (let j = 0; j < authorsArr.length; j++) {
			if (authorIds[i] === authorsArr[j].id) {
				courseAuthors.push(authorsArr[j].name);
			}
		}
	}
	return courseAuthors;
};

const getCourseDuration = (totalMinutes) => {
	let mm = totalMinutes % 60;
	let hh = (totalMinutes - mm) / 60;
	let formatMM = mm < 10 ? '0' + mm : mm;
	let formatHH = hh < 10 ? '0' + hh : hh;
	return formatHH + ':' + formatMM + ' hours';
};

module.exports = getCourseDuration;

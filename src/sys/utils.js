export function stringToDate(s) {
	let tmp = s.split('-');
	return new Date(tmp[1], tmp[2], tmp[0]);
}


export function getSortFunction(column, direction) {
	let field = column;
	return function(a,b) {
		if ( a[field] > b[field]) {
			return direction;
		} else {
			return 0-direction;
		}
	}
}
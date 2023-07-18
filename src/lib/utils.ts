type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export const formatDate = (date: string, dateStyle: DateStyle = 'medium', locales: string = 'en') => {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));

};

export const documentTitle = (newTitle: string) => {
	return (document.title = newTitle + " / AmberMotor");
};

export const documentBody = () => {
	return (document.body.className = "scrollbar-hide scroll-smooth");
};

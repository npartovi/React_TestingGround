export function selectBook(book){
	// selectBook is an actioncreator, it needs to return an action
	// an object witha  type property
	return{
		type: 'BOOK_SELECTED',
		payload: book
	}
}
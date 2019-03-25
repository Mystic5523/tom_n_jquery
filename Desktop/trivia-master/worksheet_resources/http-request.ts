	getQuestions() {
		return this.http.get('//cocktail-trivia-api.herokuapp.com/api/sample')
			.map((res: Response) => res.json());
	}

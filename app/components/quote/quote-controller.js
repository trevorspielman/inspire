function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(function(quote){
		quoteTemplate = `
		<p><em>${quote.quote}</em></p>
		<p><strong>${quote.author}</strong></p>
		`
		// <i class="fas fa-sync" onclick="app.controllers.quoteController.getQuote('quote')">

		quoteElem.innerHTML = quoteTemplate
	})
}

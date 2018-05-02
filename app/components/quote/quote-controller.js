function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(function(quote){
		var quoteTemplate = `
		<div class="col-12">
		<p><em>${quote.quote}</em></p>
		<p><strong>${quote.author}</strong></p>
		</div>
		`
		quoteElem.innerHTML = quoteTemplate
	})
	
	this.refreshQuote = function refreshQuote(event){
		event.preventDefault()
		qs.getQuote(function(quote){})
	}
	
}

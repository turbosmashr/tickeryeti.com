$(function(){
    $('#ticker').on('submit', function(e) {
        e.preventDefault();  //prevent form from submitting
        var yahoo = 'http://www.finance.yahoo.com/quote/';
        var	seekingalphaA = 'http://www.seekingalpha.com/symbol/';
        var seekingalphaB = '/earnings'
        var secA = 'https://www.sec.gov/cgi-bin/browse-edgar?CIK=';
        var secB = '&owner=exclude&action=getcompany';
        var google = 'https://finance.google.com/finance?q=';
        var finviz = 'https://www.finviz.com/quote.ashx?t=';
        var stanford = 'http://securities.stanford.edu/filings.html';
        var userEntry = $('#tickersymbol').val();

        if (document.getElementById('yahoocheck').checked) {
            window.open(yahoo + userEntry, '_blank');
        }
        if (document.getElementById('seekingalphacheck').checked) {
            window.open(seekingalphaA + userEntry + seekingalphaB, '_blank');
        } 
        if (document.getElementById('seccheck').checked) {
            window.open(secA + userEntry + secB, '_blank');
        } 
        if (document.getElementById('googlecheck').checked) {
            window.open(google + userEntry, '_blank');
        }
        if (document.getElementById('finvizcheck').checked) {
            window.open(finviz + userEntry, '_blank');
        } 
        if (document.getElementById('stanfordcheck').checked) {
            window.open(stanford, '_blank');
        }
        
    });

});
$(document).ready(function() {
    if(window.location.href.indexOf("en.") > -1) {
        $("#Idioma").val("en");
	}
    else {
        $("#Idioma").val("pt");
    }
});
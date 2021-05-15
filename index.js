function ChargeLeFooter() {
    $(document).ready(function(){
        $("#footerContent").load("./footer.html");
        /*
        var oJsonFile = $.getJSON("test.json", function(oJson) {
            var urlParams = new URLSearchParams(window.location.search);
            var sParam1 = urlParams.get("Category");
            var sText ="";
            if (sParam1 && oJson[sParam1]) {
                sText = oJson[sParam1].Description;
            } else {
                sText = oJson["Isekai"].Description;
            }
            $("#Description").html(sText);
            
        } );*/
    });
}
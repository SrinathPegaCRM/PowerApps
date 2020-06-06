function accountOnload(executionContext){
var formContext = executionContext.getFormContext();
var lookUpName = "parentaccountid";
formContext.getControl(lookUpName).addOnLookupTagClick(
    function(context){
        onLookupClick(context);   
    }
);
}

function onLookupClick(context) {
    context.getEventArgs().preventDefault();
    var tagValue = context.getEventArgs().getTagValue();

    var pageInput = {
        pageType: "entityrecord",
        entityName: "account",
        entityId: tagValue.id //replace with actual ID
    };
    var navigationOptions = {
        target: 2,
        height: {value: 80, unit:"%"},
        width: {value: 70, unit:"%"},
        position: 1
    };
    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function success() {
                // Run code on success
        },
        function error() {
                // Handle errors
        }
    );
}
# Power Apps component framework: navigateTo (Client API reference)

Navigates to the specified entity list, entity record, or HTML web resource.

MS docc https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto

# OnLookupTagClick Event (Client API reference)

This event occurs when the user clicks the tag in a lookup control.

An execution context object is passed to event handlers for this event. You can use the getEventArgs method to retrieve an object that has the getTagValue method.

The getTagValue method returns an object with the following properties:

Name: String. Name of the tag.
ID: String. ID of the tag.
EntityType: String. Entity type of the tag.
FieldName. String. The originating lookup field that raised the event.

MS docs https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/events/onlookuptagclick

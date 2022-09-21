({
    getData : function(component, helper, event) {
        var action = component.get('c.searchContacts');
        action.setParams({ searchKey : component.get("v.searchKey"),});
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var rows = response.getReturnValue();
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    if (row.Account) {
                        row.AccountName = row.Account.Name;
                        row.AccountLink = '/' + row.Account.Id;
                    }
                    if(row.Contact) {
                        row.FirstName = row.Contact.FirstName;
                        row.LastName = row.Contact.LastName;
                        row.Email = row.Contact.Email;
                        row.MobilePhone = row.Contact.MobilePhone;
                        row.CreatedDate = row.Contact.CreatedDate;
                    }
                }
                component.set('v.data', rows);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})
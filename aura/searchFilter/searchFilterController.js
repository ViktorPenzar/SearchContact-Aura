({
    init: function (component, event, helper) {
        component.set('v.columns', [
            { label: 'First Name', fieldName: 'FirstName', type: 'text'},
            { label: 'Last Name', fieldName: 'LastName', type: 'text'},
            { label: 'Email', fieldName: 'Email', type: 'email'},
            { label: 'Mobile Phone', fieldName: 'MobilePhone', type: 'phone'},
            {label: 'Account Name', fieldName: 'AccountLink', type: 'url', typeAttributes: { label: { fieldName: 'AccountName' }, target: '__blank'}},
            {label: 'CreatedDate', fieldName: 'CreatedDate', type: 'date', typeAttributes:{year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: 'true'}}
        ]);
        component.set("v.searchKey", '');
        helper.getData(component);
    },

    handleWordChange: function (component, event, helper) {
        let input = event.getSource();
        let inputValue = input.get("v.value");
        component.set("v.searchValue", inputValue);
    },

    handleSearchKeyword: function (component, event, helper) {
        let buttonClicked = event.getSource();
        let inputValue = buttonClicked.get("v.value");
        component.set("v.searchKey", inputValue);
        helper.getData(component, event);
    }
})
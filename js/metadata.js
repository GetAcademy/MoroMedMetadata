var metadata = {
    showPeoplePage: {
        text: 'Personer',
        columns: [
            { text: 'Fornavn', dataPropertyName: 'firstName' },
            { text: 'Etternavn', dataPropertyName: 'lastName' },
            { text: 'Email', dataPropertyName: 'email' },
            { text: 'Sist aktiv', dataPropertyName: 'lastActiveDate', dataType: 'date' },
        ], 
        operations: [
            { text: 'edit', goToPage: 'editPersonPage'},
            { text: 'details', goToPage: 'detailsPersonPage'},
            { text: 'delete', doAction: 'deletePersonAction'},
        ]
    }
};

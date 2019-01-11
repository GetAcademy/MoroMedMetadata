var metadata = {
    editAndDetailsPersonPage: {
        template: 'form',
        dataPath: 'people',
        text: 'Rediger person',
        columns: [
            { text: 'Fornavn', dataPropertyName: 'firstName' },
            { text: 'Etternavn', dataPropertyName: 'lastName' },
            { text: 'Email', dataPropertyName: 'email' },
            { text: 'Sist aktiv', dataPropertyName: 'lastActiveDate', dataType: 'date' },
        ],
    },
    showPeoplePage: {
        template: 'table',
        dataPath: 'people',
        text: 'Personer',
        columns: [
            { text: 'Fornavn', dataPropertyName: 'firstName' },
            { text: 'Etternavn', dataPropertyName: 'lastName' },
            { text: 'Email', dataPropertyName: 'email' },
            { text: 'Sist aktiv', dataPropertyName: 'lastActiveDate', dataType: 'date' },
        ],
        operations: [
            { text: 'rediger', goToPage: 'editAndDetailsPersonPage', params: { edit: true } },
            { text: 'detaljer', goToPage: 'editAndDetailsPersonPage', params: { edit: false } },
            { text: 'slett', doAction: 'deletePersonAction' },
        ]
    },
    //showChessResultsPage: {
    //    template: 'table',
    //    text: 'Sjakkresultater',
    //    columns: [
    //        { text: 'Spiller 1', dataPropertyName: 'player1name' },
    //        { text: 'Spiller 2 ', dataPropertyName: 'player2name' },
    //        { text: 'Poeng spiller 1', dataPropertyName: 'player1points' },
    //        { text: 'Poeng spiller 2', dataPropertyName: 'player2points' },
    //    ],
    //    operations: [
    //        { text: 'Legg til poeng spiller 1', doAction: 'addPointsPersonAction', params: { player: 1} },
    //        { text: 'Legg til poeng spiller 2', doAction: 'addPointsPersonAction', params: { player: 2  } },
    //    ]
    //} 
};

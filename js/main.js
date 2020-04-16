/**
 * Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
 * Usiamo i template in html e il clone per separare la parte logica (JS) dalla parte di markup (HTML)
 * Recap funzionalità: mostrare, aggiungere e eliminare elementi dalla lista
 */

$(document).ready(function () {

    // Creo array cose da fare
    var thingsToDo = [
        'Fare il letto',
        'Seguire la lezione di Paolo',
        'Preparare il pranzo',
        'Fare il caffé',
        'Studiare Javascript',
    ];

    // Creo variabile lista
    var list = $('.todo-list');

    // Avvio loop per aggiungere cose da fare alla lista
    for(var i = 0; i < thingsToDo.length; i++) {

        // Clono il template creato appositamente
        var newToDoItem = $('.template li').clone();
        newToDoItem.prepend(thingsToDo[i]);

        // Aggiungo elemento alla lista
        list.append(newToDoItem);
    }

    // Rendere funzionante l'icona per eliminare elemento della lista
    var deleteButton = $('.todo-list .element i:last-child');
    deleteButton.click(function() {
        $(this).parent().parent().remove();
    });

}); // end ready method
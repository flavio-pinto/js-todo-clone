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

    // Rendere funzionante barra aggiunta elemento alla ToDo List
    var addToDoElement = $('.add-todo');
    addToDoElement.keyup(function(event){
        if(event.which == 13) {
            var newElement = addToDoElement.val().trim();

            if((newElement !== '') && (newElement.length < 35)) {
                var addNew = $('.template li').clone();
                addNew.prepend(newElement);
                list.append(addNew);

                addToDoElement.val('');
            } else {
                alert('Attenzione, non puoi inserire stringhe più lunghe di 35 caratteri, né stringhe vuote!')
            }
        }
    });

    // Rendere funzionante il pulsante per rimuovere todo element
    function cuteRemove(elim) {
        elim.animate({opacity: '0'}, 150, function() {
            elim.animate({height: '0px'}, 150, function() {
                elim.remove();
            });
        });
    }

    $('body').on('click', '.todo-list .element i:last-child', function() {
        var elim = $(this).parent().parent();
        cuteRemove(elim);
    });

    // Rendere funzionante il pulsante per segnare attività eseguite
    $('body').on('click', '.todo-list .element i:first-child', function() {
        $(this).parent().parent().toggleClass('completed');
    });
}); // end ready method
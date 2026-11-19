document.addEventListener('DOMContentLoaded', function() {

    
// Maakt een kalendar aan en stelt de opties in, zoals de weergave, knoppen en klikfunctionaliteit.
    let calendar = new FullCalendar.Calendar(
        document.getElementById('calendar'),
        {
            initialView: 'dayGridMonth',
            headerToolbar:{
              left: 'prev,next today',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            },
            buttonText: {
                today: 'Vandaag',
                month: 'Maand',
                week: 'Week',
                day: 'Dag',
            },
            selectable: true,
            validRange: {
                start: '2026-11-01',
                end: '2036-07-01'
            },
            // Functie die wordt uitgevoerd wanneer een datum wordt aangeklikt in de kalender. Het toont de gekozen datum in het appointment-panel.
            dateClick: function(info) {
            document.querySelector('.appointment-panel p').textContent =
            'Gekozen datum: ' + info.dateStr;
            },
        }
    );

    calendar.render();

});


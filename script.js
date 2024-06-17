// Funkcja pokazująca kalendarz dla wybranej flagi
function showCalendar(country) {
    // Ukrycie wszystkich kalendarzy
    document.getElementById('calendar_pl').style.display = 'none';
    document.getElementById('calendar_de').style.display = 'none';

    // Wyświetlenie odpowiedniego kalendarza na podstawie wybranej flagi
    if (country === 'pl') {
        document.getElementById('calendar_pl').style.display = 'block';
        loadCalendarData('pl'); // Przykładowe ładowanie danych kalendarza dla Polski
    } else if (country === 'de') {
        document.getElementById('calendar_de').style.display = 'block';
        loadCalendarData('de'); // Przykładowe ładowanie danych kalendarza dla Niemiec
    }
}

// Funkcja ładowania danych kalendarza
function loadCalendarData(country) {
    // Pobierz dane kalendarza z serwera lub innej bazy danych
    // Przykładowa implementacja dla pobrania danych kalendarza
    // Możesz dostosować tę funkcję do swoich potrzeb
    // Na potrzeby przykładu, ta funkcja jest pusta
}

// Funkcja dodająca pasażera do listy
function addPassenger() {
    // Pobierz dane pasażera z formularza lub innego źródła
    // Przykładowa implementacja dodawania pasażera
    // Możesz dostosować tę funkcję do swoich potrzeb
    // Na potrzeby przykładu, ta funkcja jest pusta
}


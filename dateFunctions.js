function getCurrentDate() {
    return new Date();
}

function getYear(date) {
    return date.getFullYear();
}

function getMonth(date) {
    return date.getMonth() + 1; // JavaScript devuelve los meses en base 0 (0 = enero, 11 = diciembre)
}

function getDayOfMonth(date) {
    return date.getDate();
}

function changeYear(date, year) {
    const newDate = new Date(date);
    newDate.setFullYear(year);
    return newDate;
}

function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

function getDayOfWeek(date) {
    return date.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
}

function formatDate(date) {
    return date.toISOString().split('T')[0]; // Devuelve la fecha en formato "YYYY-MM-DD"
}

function isBefore(date1, date2) {
    return date1 < date2;
}

function isAfter(date1, date2) {
    return date1 > date2;
}

module.exports = {
    getCurrentDate,
    getYear,
    getMonth,
    getDayOfMonth,
    changeYear,
    addDays,
    getDayOfWeek,
    formatDate,
    isBefore,
    isAfter
};

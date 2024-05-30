function getCurrentDate() {
    return new Date();
}

function getYear(date) {
    return date.getFullYear();
}

function getMonth(date) {
    return date.getMonth() + 1; // JavaScript months are 0-indexed.
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
    return date.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
}

function formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
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

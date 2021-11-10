const months = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
    monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
    days = ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
    daysMin = ['', '', '', '', '', '', ''],
    seasons = ['iarnă', 'arc', 'vară', 'toamnă'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) { const _counterLength = 60; for (let counter = 0; counter < _counterLength; counter++) { innerDate(counter, 'date-');
        innerDate(counter, 'date') }

    function innerDate(counter, dateType) { let newCounter;
        dateType === 'date-' ? newCounter = -counter : newCounter = counter; const _msInDay = 86400000,
            _localDate = new Date(Date.now() + (newCounter * _msInDay)),
            _day = _localDate.getDate(),
            _month = _localDate.getMonth() + 1,
            _year = _localDate.getFullYear(); const dayDefault = addZero(_day),
            monthDefault = addZero(_month),
            defaultDate = dayDefault + '.' + monthDefault + '.' + _year; const dateClass = dateType + counter,
            nodeList = document.querySelectorAll('.' + dateClass); for (let i = 0; i < nodeList.length; i++) nodeList[i].innerHTML = defaultDate }

    function addZero(numb) { return numb < 10 ? '0' + numb : numb } }
if (document.body.classList.contains('ev-date')) { document.addEventListener("DOMContentLoaded", function() { postDate(days, daysMin, months, monthMin, seasons) }); }
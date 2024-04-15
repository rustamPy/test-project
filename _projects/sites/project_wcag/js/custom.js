const show_table = (target) => {
    const tableDivs = document.querySelectorAll('div[id^="table-"]');
    let t = null;
    for (const div of tableDivs) {
        if (div.id === target) {
            t = div;
            break
        }
    }

    if (t && !t.style.display) {t.style.display = 'block';}
    else if (t && t.style.display) {
        for (const div of tableDivs) {
            div.style.display = null;
        }

    }
}
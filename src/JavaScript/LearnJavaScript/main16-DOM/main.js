/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */

function highlight(table) {
    for (let tr of table.rows) {
      let index = tr.rowIndex
      const tdArray = tr.cells

      for (let td of tdArray) {
        const tdDataAvailableBoolean = td.dataset.available
        // console.log('tdDataAvailableBoolean:', tdDataAvailableBoolean)

        // Проверка на true/false по атрибуту available
        if (tdDataAvailableBoolean === 'true') {
          table.rows[index].classList.add('available')
        } else if (tdDataAvailableBoolean === 'false') {
          table.rows[index].classList.add('unavailable')
        }

        // Проверка на male/female в зависимости от значения колонки Gender
        if (tdArray[2].innerHTML === 'm') {
          table.rows[index].classList.add('male')
        } else if (tdArray[2].innerHTML === 'f') {
          table.rows[index].classList.add('female')
        }

        // Проверка на возраст в зависимости от значения колонки Age
        if (tdArray[1].innerHTML < 18) {
          table.rows[index].style.textDecoration = 'line-through'
        }
      }

      // Присваивание атрибута hidden, если атрибута data-available нет вообще
      if (!tr.classList.contains("available") || !tr.classList.contains("available")) {
        tr.setAttribute('hidden', '')
        table.rows[0].removeAttribute('hidden')
      }

      console.log('tr', tr)

    }
}


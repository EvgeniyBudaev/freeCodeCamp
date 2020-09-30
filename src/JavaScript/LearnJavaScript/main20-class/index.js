/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: '',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *   },
 *
 * @constructor
 */

export default class UserTable {
    constructor(rows) {
        this._rows = rows
        this._tr = this.init()
        this.elem = this._tr
        console.log('this._tr', this._tr)
    }

    init() {
        // const tr = document.createElement('tr')
        const tr = document.querySelector('tr')
        tr.innerHTML = this.toRow()
        return this._tr = tr
    }

    toRow() {
       return `
        <td>Илья!</td>
        <td>25</td>
        <td>1000</td>
        <td>Petrozavodsk</td>
        <td><button>X</button></td>
        `
    }

}


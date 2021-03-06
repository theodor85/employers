import ApplicationController from './application_controller.js'

export default class extends ApplicationController {
  delete(event) {
    event.preventDefault()

    const empl_row_id = event.target.dataset.id
    document.getElementById(empl_row_id).remove()

    const empl_id = parseInt(empl_row_id.split('_')[1])
    console.log(empl_id)
    this.stimulate('Employee#delete', empl_id)
  }
  add(event) {
    event.preventDefault()
    const new_name = document.getElementById('new_name').value
    const new_last_name = document.getElementById('new_last_name').value
    this.stimulate('Employee#add', new_name, new_last_name)
  }
}

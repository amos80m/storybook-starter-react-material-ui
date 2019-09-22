const rows = [...new Array(4)].map(arr => ({ num:95, title: 'Flixes Test', time: 'Yesterday 13:45:00', src: 'From my head', isClassified: false, status: 'high' }))
rows.push({ num:65, title: 'Flixes Test', time: 'Yesterday 13:45:00', src: 'From my head', isClassified: false, status: 'high' })

const api = {
    test : () => async () => fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => ({success:true, rows}))
}
export default api;
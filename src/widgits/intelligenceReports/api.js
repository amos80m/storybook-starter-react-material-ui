const api = {
    test : () => async () => fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        let data = { success:true,  rows:[...new Array(4)].map(arr => ({ num:95,title: 'Flixes Test',time: 'Yesterday 13:45:00',
                src: 'From my head',isClassified: false,status: 'high'})
            )}
            alert('look for me!')
            //todo: try to play as you loading for 3 sec`
            return data
            setTimeout(() => {
                return data
            },3000)
    })
}
export default api;
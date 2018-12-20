const postTitle = document.querySelector('#post-title');
const postYear = document.querySelector('#post-year');
const postGenre = document.querySelector('#post-genre');
const postSubmit = document.querySelector('#post-submit');
const putTitle = document.querySelector('#put-title')
const putYear = document.querySelector('#put-year')
const putGenre = document.querySelector('#put-genre')
const putId = document.querySelector('#put-id')
const putSubmit = document.querySelector('#put-submit')
const deleteId = document.querySelector('#delete-id')
const deleteSubmit = document.querySelector('#delete-submit')

const postMovie= document.querySelector('#postButton')
const updateMovie = document.querySelector('#updateButton')
const deleteMovie = document.querySelector('#deleteButton')
const getTitle = document.querySelector('#get-title')
const getSubmit = document.querySelector('#get-submit')


postMovie.addEventListener('click', (event) => {
  document.getElementById('post-form').style.display = 'flex'
  document.getElementById('put-form').style.display= 'none'
  document.getElementById('delete-form').style.display ='none'
  document.getElementById('instructions').innerHTML ='Enter new movie'
})

updateMovie.addEventListener('click',(event) => {
  document.getElementById('put-form').style.display= 'flex'
  document.getElementById('post-form').style.display = 'none'
  document.getElementById('delete-form').style.display ='none'
  document.getElementById('instructions').innerHTML ='update by entering info.'
})

deleteMovie.addEventListener('click', (event) => {
  document.getElementById('delete-form').style.display ='flex'
  document.getElementById('post-form').style.display = 'none'
  document.getElementById('put-form').style.display= 'none'
  document.getElementById('instructions').innerHTML='delete movie by id'
})


postSubmit.addEventListener('click',(event) => {
event.preventDefault();
console.log('title.value', postTitle.value);
console.log('year.value', postYear.value);
axios 
    .post('https://0mikmh74ag.execute-api.us-west-2.amazonaws.com/dev/post', {
        title: postTitle.value,
        year: postYear.value,
        genre: postGenre.value
    })
  .then(response =>{
    console.log('response', response);
  })
  .catch(e => {
    console.log('error', e)
  })
 })

 putSubmit.addEventListener('click',(event)=>{
  event.preventDefault(); 
   axios 
   .put('https://0mikmh74ag.execute-api.us-west-2.amazonaws.com/dev/put', {
       title: putTitle.value,
       year: putYear.value,
       genre: putGenre.value,
       id:putId.value
   })
 .then(response =>{
   console.log('response', response);
 })
 .catch(e => {
   console.log('error', e)
 })
})

deleteSubmit.addEventListener('click',(event)=>{
  event.preventDefault(); 
   
   axios 
   .delete('https://0mikmh74ag.execute-api.us-west-2.amazonaws.com/dev/delete', {
       data: {
        id:deleteId.value
       }
   })
 .then(response =>{
   console.log('response', response);
 })
 .catch(e => {
   console.log('error', e)
 })
})



getSubmit.addEventListener('click',(event)=>{
  event.preventDefault(); 
   
   axios 
   .post('https://0mikmh74ag.execute-api.us-west-2.amazonaws.com/dev/search', {
       title: getTitle.value
   })

 .then(response =>{
   console.log('response', response);
 })
 .catch(e => {
   console.log('error', e)
 })
})


    .then(response =>{
      let emptyCard = ``
      document.querySelector('#result').innerHTML = emptyCard
      response.data.message.rows.map(x => {
        let cardTemplate = `
          <div class = 'card'>
            <p> ${x.id} </p>
            <p> ${x.title} </p>
            <p> ${x.year} </p>
            <p> ${x.genre} </p>
          </div>
          `
        let newCard = document.createElement('div');
        newCard.innerHTML = cardTemplate;
        document.querySelector('#result').appendChild(newCard);
      })
    })
    .catch(e => {
      console.log('error', e)
    })
})


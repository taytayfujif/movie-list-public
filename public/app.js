const postTitle = document.querySelector('#post-title');
const postYear = document.querySelector('#post-year');
const postGenre = document.querySelector('#post-genre');
const postSubmit = document.querySelector('#post-submit');
const putTitle = document.querySelector('#put-Title')
const putYear = document.querySelector('#put-Year')
const putId = document.querySelector('#put-id')
const putSubmit = document.querySelector('#put-submit')
const deleteId = document.querySelector('#delete-id')
const deleteSubmit = document.querySelector('#delete-submit')



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
   .delete('https://fn01dfbm9h.execute-api.us-west-2.amazonaws.com/dev/delete', {
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
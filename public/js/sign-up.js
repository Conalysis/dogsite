import formdata from 'form-data';
// wait for the document to load)
window.onload = () => {

//button 
  document.getElementById('saveDog').addEventListener('click', savefile, logDog) //remember to add log dog when upload works

  // assign a click event to the saveDog button
};

const logDog = async (ev)  => {
  // validate
  ev.preventDefault();
  // if invalid, stop form by doing ev.preventDefault()
  const dogs = {

  }


 let form = new FormData();
 form.append('file', file, file.fileName);
 form.set('name',dogs.name)
 form.set('breed', dogs.breed)
 form.set('dob',dogs.dob)
 form.set('colour', dogs.colour)

  response = await axios.post('/dog',form) //{
  /*headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    }
  });*/
 console.log('all data sent')

  alert(`${document.getElementById('name').value} is signed up, Happy Voting!`)
  window.location = ('/index.html')

}

const savefile =  (ev) => {
  ev.preventDefault();
const url = "http://localhost:3003/upload"

  let photo = new FormData();
  photo.append('file', file, file.fileName);

  return (dispatch) =>  { 
     axios.post(URL, photo, {
  headers: {
    'accept': 'application/json',
    'Accept-Language': 'en-US,en;q=0.8',
    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
  }
})
.then((response) => {
  console.log('saved')
}).catch((error) => {
  console.log('err')
});
};
}



/*
  const response = await axios.post(url, profilephoto, config)
      .then(res => console.log(res.data))
      .catch(err => console.log('Error: ', err));

    */
  //console.log(photo)
  //const response = await axios.post('/upload', photo)
  

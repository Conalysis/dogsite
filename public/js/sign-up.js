// wait for the document to load)
window.onload = () => {

//button 
    document.getElementById('saveDog').addEventListener('click', savephoto) //remember to add log dog when upload works

    // assign a click event to the saveDog button
};

const logDog = async (ev)  => {
    // validate
   ev.preventDefault();

    // if invalid, stop form by doing ev.preventDefault()
  const dogs = {
    name: document.getElementById('name').value,
    breed: document.getElementById('breed').value,
    dob: document.getElementById('dob').value,
    colour: document.getElementById('colour').value,
    votes: 0,
  }

  const response = await axios.post('/dog', dogs);

  alert(`${document.getElementById('name').value} is signed up, Happy Voting!`)
  window.location = ('/index.html')

  }

const savephoto = async (ev) => {
  ev.preventDefault();
  
  const photo = document.getElementById('photo').value
  console.log(photo)
  const response = await axios.post('/upload', photo)
  
}
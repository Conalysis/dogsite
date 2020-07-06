const express = require('express')
const multer = require('multer')
const path = require('path')


const app = express()

//take from server
const port = 3003;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
//load index.html
app.use(express.static('public'))

//check file type
function checkFileType(file,cb){
    //Allowed extensions
    const filetypes = /jpeg|jpg|png|gif|json/;
    //check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    // check mime
    const mimetype = filetypes.test(file.mimetype)

    if(mimetype && extname){
        return cb(null,true);
    } else{
        cb('Error: Images Only');
    }
}



// set storage engine
const storage = multer.diskStorage({
    destination: 'public/photosofdogs/',
    filename: function (req, file, cb ) {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//init upload
const upload = multer({
    storage: storage,
    //limits:{fileSize:1000000} 1mb size limit
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
}).single('photo');


app.post('/upload', (req,res)=>{
    upload(req,res, (err)  => {

        //there are currently no validation (is there a file??)
      console.log(req.file);
     res.send('file uploaded')
    })
})
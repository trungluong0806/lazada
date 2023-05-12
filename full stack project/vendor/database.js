const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });
const mongoose = require('mongoose');
const uri = 'mongodb+srv://trungluong0806:Lacussaber080699@cluster0.w8zcmxn.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB connected!');
});

const productSchema = new mongoose.Schema({
  productName: String,
  productPrice: Number,
  productBrand: String,
  productLocation: String,
  productCFO: String,
  productDescription: String,
  imagePath: String
});

const Product = mongoose.model('Product', productSchema);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static('public/uploads'));


app.get('/', handleIndex);
app.get('/products/:id', handleProduct);
app.get('/add', handleAddForm);
app.post('/add', upload.single('image'), handleAddProduct);
app.get('/viewmyproduct', handleViewMyProduct);

async function handleIndex(req, res) {
  try {
    const docs = await Product.find({});
    res.render('index', { products: docs });
  } catch (err) {
    console.log(err.stack);
  }
}

async function handleProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.render('product', { product: product });
  } catch (err) {
    console.log(err.stack);
  }
}

function handleAddForm(req, res) {
  res.render('add', { title: 'Add New Product' });
}

async function handleAddProduct(req, res) {
  try {
    const { productName, productPrice, productBrand, productLocation, productCFO, productDescription } = req.body;
    const imagePath = req.file.path;
    
    const newProduct = new Product({ productName, productPrice, productBrand, productLocation, productCFO, productDescription, imagePath });
    await newProduct.save();
    
    res.redirect('/');
  } catch (err) {
    console.log(err.stack);
  }
}

async function handleViewMyProduct(req, res) {
  try {
    const docs = await Product.find({});
    res.render('viewmyproduct', { products: docs });
  } catch (err) {
    console.log(err.stack);
  }
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

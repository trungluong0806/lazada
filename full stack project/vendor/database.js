const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const uri = 'mongodb+srv://trungluong0806:Lacussaber080699@cluster0.w8zcmxn.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'test';

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', handleIndex);
app.get('/products/:id', handleProduct);
app.get('/add', handleAddForm);
app.post('/add', upload.single('image'), handleAddProduct);
app.get('/viewmyproduct', handleViewMyProduct);

async function handleIndex(req, res) {
  try {
    await client.connect();
    const collection = client.db(dbName).collection('product_infos');
    const docs = await collection.find().toArray();
    res.render('index', { products: docs });
  } catch (err) {
    console.log(err.stack);
  } finally {
    // await client.close();
  }
}

async function handleProduct(req, res) {
  try {
    await client.connect();
    const collection = client.db(dbName).collection('product_infos');
    const product = await collection.findOne({ _id: ObjectId(req.params.id) });
    res.render('product', { product: product });
  } catch (err) {
    console.log(err.stack);
  } finally {
    // await client.close();
  }
}

function handleAddForm(req, res) {
  res.render('add', { title: 'Add New Product' });
}

async function handleAddProduct(req, res) {
  try {
    const { productName, productPrice, productBrand, productLocation, productCFO, productDescription } = req.body;
    const imagePath = req.file.path; 
    
    await client.connect();
    const collection = client.db(dbName).collection('product_infos');
    const result = await collection.insertOne({ productName, productPrice, productBrand, productLocation, productCFO, productDescription, imagePath }); // 이미지 경로 저장
    console.log(result);
    res.redirect('/');
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}



async function handleViewMyProduct(req, res) {
  try {
    await client.connect();
    const collection = client.db(dbName).collection('product_infos');
    const docs = await collection.find().toArray();
    res.render('viewmyproduct', { products: docs });
  } catch (err) {
    console.log(err.stack);
  } finally {
    // await client.close();
  }
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

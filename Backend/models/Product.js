import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;

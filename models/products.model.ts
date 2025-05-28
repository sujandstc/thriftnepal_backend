import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },

  product_desc: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image_url: {
    type: String,
    required: true,
  },
});

const productsModel = mongoose.model("products", productsSchema);

export default productsModel;

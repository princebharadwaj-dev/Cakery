import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../models/productModel.js";


export const addProduct = async(req,res)=>{

    try {

        const {
            name,
            description,
            variants,
            category,
            flavor,
            stock,
            eggless,
            customization,
            bestseller

        } = req.body;


        console.log(req.body);
        console.log(req.files);


        const image1 = await uploadOnCloudinary(
            req.files.image1[0].path
        );

        const image2 = await uploadOnCloudinary(
            req.files.image2[0].path
        );

        const image3 = await uploadOnCloudinary(
            req.files.image3[0].path
        );

        const image4 = await uploadOnCloudinary(
            req.files.image4[0].path
        );


        if(!image1 || !image2 || !image3 || !image4){

            return res.status(400).json({
                message:"Image upload failed"
            });

        }


        const productData = {

            name,
            description,
            category,
            flavor,
            stock,
            variants: JSON.parse(variants),


            eggless: eggless === "true",

            customization:
            customization === "true",

            bestseller:
            bestseller === "true",


            image1,
            image2,
            image3,
            image4

        };


        const product = await Product.create(productData);


        return res.status(201).json(product);


    } catch(error){

        console.log("AddProduct error:",error);

        return res.status(500).json({
            message:`AddProduct error ${error.message}`
        });

    }

}

export const listProduct = async (req,res) => {
     
    try {
        const product = await Product.find({});
        return res.status(200).json(product)

    } catch (error) {
        console.log("ListProduct error")
    return res.status(500).json({message:`ListProduct error ${error}`})
    }
}

export const removeProduct = async (req,res) => {
    try {
        let {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
         return res.status(200).json(product)
    } catch (error) {
        console.log("RemoveProduct error")
    return res.status(500).json({message:`RemoveProduct error ${error}`})
    }
    
}
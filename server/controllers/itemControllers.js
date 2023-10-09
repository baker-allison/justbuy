const  Item = require("../models/Item.js")

 

const  get_items = async (req, res) => {
   await Item.find().sort({date:-1}).then(items => res.json(items));
 };


  const post_item = (req, res) => {
    
   const title = req.body.title
   const description = req.body.description
   const image = req.file.filename
   const category = req.body.category
   const price = req.body.price

   const newItemData = {
    title,
    description,
    image,
    category,
    price
   }
    const newItem = new Item(newItemData);

    newItem.save()
    .then(() => res.json(newItem), alert("success"))
    .catch(err => res.status(400).json("Error : " + err))
   }
  
 



  const update_item = (req, res) => {
    Item.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(item){
        Item.findone({_id: req.params.id}).then(function(item){
            res.json(item);
        });
    });
 } 




  


 const search_item = async (req, res) => {
const searchitem = req.query.q
 await Item.find({ title: { $regex: `${searchitem}`, $options: "i" }}).then(items => res.json(items)).catch(err => res.status(400).json("Error : " + err))
 
}



 const get_Category = async (req, res) => {
  
   await Item.find({category:req.params.id}).then(items => res.json(items)).catch(err => res.status(400).json("Error : " + err))
  
  
   }

  const delete_item = (req, res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({sucess:true});
    })
 }

module.exports = {get_items, post_item, delete_item, update_item, search_item, get_Category}



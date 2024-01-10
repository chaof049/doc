import { Card } from "../schema/model.js";

export let uploadMultipleFile = async (req, res, next) => {
//   let links = req.files.map((value, index) => {
//     return `http://localhost:8000/${value.filename}`;
//   });

  let links = req.files.map((value,index)=>{
        return `${value.filename}`
    })
    let image = links.join("")
    let data = req.body;
    data = {
        ...data,
        picture:image,
    }
    let result = await Card.create(data);

  res.json({
    success: true,
    message: "file uploaded successfully",
    result: result,
  });
};

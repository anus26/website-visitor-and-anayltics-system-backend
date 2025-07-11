import Visiter from "../modles/visitormodles.js"

const visiter=async(req,res)=>{
  const ip=req.clientIp
  const browser=req.useragent.browser
   const  device=`${req.useragent.platform}-${req.useragent.os}`
  console.log({ ip, browser ,device});

//   res.send("Visitor data captured");
  const  visit= new  Visiter({
    ip,
    browser,
    device,

  })
    await visit.save();

  res.status(200).json({ message: 'Visitor data captured' ,visit});
}



const getallvisitor=async(req,res)=>{
    try {
       const visits =await Visiter.find()
       res.status(200).json({visits}) 
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch visitor data" }); 
    }
}
export {visiter ,getallvisitor} 
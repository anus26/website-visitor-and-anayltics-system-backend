import Visiter from "../modles/visitormodles.js"

const visiter=async(req,res)=>{
  const ip=req.clientIp
  const browser=req.useragent.browser
  const os=req.useragent.os
  const platform=req.useragent.platform
  console.log({ ip, browser, os, platform });

  res.send("Visitor data captured");
  const  visit= new  Visiter({
    id:ip,
    browser,
    device:`${os}-${platform}`

  })
    await visit.save();

  res.status(200).json({ message: 'Visitor data captured' });
}
export default visiter
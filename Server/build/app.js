(()=>{var e={96:e=>{"use strict";e.exports=require("bcrypt")},582:e=>{"use strict";e.exports=require("cors")},142:e=>{"use strict";e.exports=require("dotenv")},860:e=>{"use strict";e.exports=require("express")},344:e=>{"use strict";e.exports=require("jsonwebtoken")},185:e=>{"use strict";e.exports=require("mongoose")},458:(e,s,r)=>{r(142).config();const t={dbUrl:String("mongodb+srv://syedjaveedix:user@cluster0.tfhjge1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"),jwtSecretKey:String("mySecretKey@2024!"),jwtExpiresIn:String("24h"),port:"3000",clientUrl:""};e.exports=t},175:(e,s,r)=>{const t=r(185),o=r(458);e.exports=async()=>{try{await t.connect(o.dbUrl),console.log("MongoDB connected successfully.")}catch(e){console.log("Error connecting to Db",e.message)}}},187:(e,s,r)=>{const t=r(813);e.exports={createProperty:async(e,s)=>{try{const r=new t(e.body);console.log(e.userId),r.owner=e.userId,await r.save(),s.status(201).json(r)}catch(e){console.error("Error while creating property: ",e),s.status(400).json({message:e.message})}},getProperties:async(e,s)=>{try{const r={city:e.query.city,bedrooms:e.query.bedrooms?Number(e.query.bedrooms):void 0,bathrooms:e.query.bathrooms?Number(e.query.bathrooms):void 0,area:e.query.area?Number(e.query.area):void 0,owner:e.query.userId?Number(e.query.userId):void 0};Object.keys(r).forEach((e=>void 0===r[e]&&delete r[e]));const o=await t.find(r).populate("owner","-password").populate("interestedUsers","-password");s.status(200).json(o)}catch(e){console.error("Error while getting all properties: ",e),s.status(500).json({message:e.message})}},getPropertyById:async(e,s)=>{try{const r=await t.findById(e.params.id).populate("owner","-password").populate("interestedUsers","-password");if(!r)return s.status(404).json({message:"Property not found"});s.status(200).json(r)}catch(e){console.error("Error while getting property by ID: ",e),s.status(500).json({message:e.message})}},updateProperty:async(e,s)=>{try{const r=await t.findByIdAndUpdate(e.params.id,e.body,{new:!0,runValidators:!0});if(!r)return s.status(404).json({message:"Property not found"});s.status(200).json(r)}catch(e){console.error("Error while updating property: ",e),s.status(400).json({message:e.message})}},deleteProperty:async(e,s)=>{try{if(!await t.findByIdAndDelete(e.params.id))return s.status(404).json({message:"Property not found"});s.status(200).json({message:"Property successfully deleted"})}catch(e){console.error("Error while deleting property: ",e),s.status(500).json({message:e.message})}}}},997:(e,s,r)=>{const t=r(96),o=r(344),n=r(711),a=r(458);r(573),e.exports={signup:async(e,s)=>{const{email:r,password:t,firstName:i,lastName:u,phoneNumber:d}=e.body;try{if(await n.findOne({email:r}))return s.status(400).json({message:"User already exists"});const e=new n({email:r,password:t,firstName:i,lastName:u,phoneNumber:d});await e.save();const c=(p=e._id,o.sign({userId:p},a.jwtSecretKey,{expiresIn:a.jwtExpiresIn}));s.status(201).json({message:"User created successfully",token:c})}catch(e){s.status(500).json({message:e.message})}var p},login:async(e,s)=>{const{email:r,password:i}=e.body;try{const e=await n.findOne({email:r});if(!e)return s.status(404).json({message:"User not found"});if(!await t.compare(i,e.password))return s.status(401).json({message:"Invalid credentials"});const u=o.sign({userId:e._id},a.jwtSecretKey,{expiresIn:a.jwtExpiresIn});s.status(200).json({token:u})}catch(e){s.status(500).json({message:e.message})}},getCurrentUser:(e,s)=>{try{s.status(200).json({userId:e.userId})}catch(e){s.status(401).json({message:"Unable to retrieve user data"})}}}},911:(e,s,r)=>{r(344);const t=r(573);e.exports=(e,s,r)=>{try{const o=e.headers.authorization;if(!o)return s.status(401).json({message:"Unauthorized: Token missing"});const n=t.verifyToken(o);if("Unauthorized: Token expired"===n||"Unauthorized: Invalid token"===n)return s.status(401).json({message:n});e.userId=n,r()}catch(e){s.status(401).json({message:e.message})}}},813:(e,s,r)=>{const t=r(185),o=new t.Schema({owner:{type:t.Schema.Types.ObjectId,ref:"User"},city:{type:String,required:!0},area:{type:String,required:!0},address:{type:String,required:!0},bedrooms:{type:Number,required:!0},bathrooms:{type:Number,required:!0},description:{type:String},interestedUsers:[{type:t.Schema.Types.ObjectId,ref:"User"}]}),n=t.model("Property",o);e.exports=n},711:(e,s,r)=>{const t=r(185),o=r(96),n=new t.Schema({firstName:{type:String,required:!0},lastName:{type:String,required:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},phoneNumber:{type:String,required:!0}},{timestamps:!0});n.pre("save",(async function(e){try{const s=await o.genSalt(10),r=await o.hash(this.password,s);this.password=r,e()}catch(s){e(s)}}));const a=t.model("User",n);e.exports=a},249:(e,s,r)=>{const t=r(860).Router(),o=r(911);t.use("/user",r(858)),t.use("/property",o,r(897)),e.exports=t},897:(e,s,r)=>{const t=r(860).Router(),o=r(187);t.post("/addProperty",o.createProperty),t.get("/getProperties",o.getProperties),t.patch("/:id",o.updateProperty),t.delete("/:id",o.deleteProperty),t.get("/:id",o.getPropertyById),e.exports=t},858:(e,s,r)=>{const t=r(860).Router(),o=r(997),n=r(911);t.post("/signup",o.signup),t.post("/login",o.login),t.get("/",n,o.getCurrentUser),e.exports=t},573:(e,s,r)=>{const t=r(344),o=r(458);e.exports={verifyToken:e=>{if(!e)return"Unauthorized: Token missing";try{return t.verify(e.split(" ")[1],o.jwtSecretKey).userId}catch(e){return"TokenExpiredError"===e.name?"Unauthorized: Token expired":"Unauthorized: Invalid token"}}}}},s={};function r(t){var o=s[t];if(void 0!==o)return o.exports;var n=s[t]={exports:{}};return e[t](n,n.exports,r),n.exports}(()=>{const e=r(860),s=r(458),t=r(175),o=r(582),n=e();n.use(o({origin:"*",methods:"GET,POST,PUT,PATCH,DELETE",credentials:!0})),t(),n.use(e.json({extended:!0})),n.use(e.urlencoded({extended:!0})),n.use("/",r(249)),n.listen(s.port,(()=>{console.log(`Server running on ${s.port}`)}))})()})();
const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

const express=require('express'); const cors=require('cors'); const dotenv=require('dotenv'); const connectDB=require('./config/db');
dotenv.config(); const app=express(); app.use(cors()); app.use(express.json()); connectDB();
app.get('/api/health',(req,res)=>res.json({success:true,message:'TaskFlow API is running',timestamp:new Date().toISOString()}));
app.use('/api/auth',require('./routes/authRoutes')); app.use('/api/tasks',require('./routes/taskRoutes'));
app.use((req,res)=>res.status(404).json({success:false,message:'Route not found'}));
app.use((err,req,res,next)=>res.status(err.statusCode||500).json({success:false,message:err.message||'Internal server error'}));
const PORT=process.env.PORT||5000; app.listen(PORT,()=>console.log(`TaskFlow API running on http://localhost:${PORT}`));

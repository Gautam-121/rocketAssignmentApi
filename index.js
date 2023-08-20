const express = require("express")
const app = express()
const axios = require("axios")


app.get("/checkResponse" , (req , res)=>{
    res.status(200).json({
        success : true,
        message : "Successfully working"
    })
})


async function generateToken(){

    const data = await axios({
        method: 'post',
        url: 'https://dev-test.cimet.io/generate-token',
        headers : {
            "Api-key" : "4NKQ3-815C2-8T5Q2-16318-55301"
        }
    })

    return data?.data?.token
}

app.post("/getAllData" ,async (req , res)=>{

    const data =  await axios({
        method: 'post',
        url: 'https://dev-test.cimet.io/plan-list',
        headers : {
            "Api-key" : "4NKQ3-815C2-8T5Q2-16318-55301",
            "Auth-token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2OTI1MjEwMTMsImV4cCI6MTY5MjUzMTgxMywibmJmIjoxNjkyNTIxMDEzLCJqdGkiOiJIRWlKQlFYakQxWHpmR2ZNIn0.jtqkekTyPzZpfHGMYRxluqAKXrN-Pip9vSNR7W5PeWs"
        },
        data : {
            "session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"
        }
    })

    const response = data.data

    res.status(201).json({
        success : true,
        message : "it done",
        response
    })
})


app.listen(process.env.PORT || 3000  , ()=>{
    console.log("Listening On Port 3000")
})


module.exports = app

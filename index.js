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

app.get("/getAllData" ,async (req , res)=>{

    const getToken = await generateToken()

    const data =  await axios({
        method: 'post',
        url: 'https://dev-test.cimet.io/plan-list',
        headers : {
            "Api-key" : "4NKQ3-815C2-8T5Q2-16318-55301",
            "Auth-token" : getToken
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

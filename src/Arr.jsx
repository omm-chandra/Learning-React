import React from "react";

const Sdata = [
    {
        id:1,
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNwBUmKOqVqWlAAmV02rpualwlMv7eJ1H6pQ&usqp=CAU", alt:"Money Heist",
        sname:"Squid Game",
        titlename:"Neflix Series",
        link:"https://www.w3schools.com"
    },
    {
        id:2,
        imgsrc:"https://i.ytimg.com/sh/S0b_FdZo4vIzVd4qhf8Hfg/market.jpg" , alt:"Lucifer",
        sname:"Lucifer",
        titlename:"Neflix Series",
        link:"https://www.w3schools.com"
    },
    {
        id:3,
        imgsrc:"https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png",
        sname:"Monet Heist",
        titlename:"Neflix Series",
        link:"https://www.w3schools.com"
    },
    {
        id:4,
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9g4rNyWmXShFNyen5mdQNsBV-MgnGyny6g&usqp=CAU",
        sname:"Extra Curricular",
        titlename:"Neflix Series",
        link:"https://www.w3schools.com"
    },
    {
        id:5,
        imgsrc:"data:image/jpeg;base64,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",
        sname:"Stranger Things",
        titlename:"Neflix Series",
        link:"https://www.w3schools.com"
    },
    {
        id:6,
        imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQUBSDj4YgmNPH4uG0NHEmERtyteJ0NeAEw&usqp=CAU",
        sname:"Peaky Blinders",
        titlename:"Neflix Series",
        link:"https://www.w3schools.com"
    }
]

export default Sdata;
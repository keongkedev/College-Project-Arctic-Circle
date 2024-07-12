var express = require("express");
var bodyParser = require("body-parser");

server = express();
var fs = require("fs");

server.use(express.static("OBJ"));//要跑在伺服器上的首頁母資料夾

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises"); //定義資料庫
var tipDB = DB.create("tip.db");
var todoDB = DB.create("todo.db");
// todoDB.insert([
//     {
//         id: "todo1",
//         bigtitle: "01",
//         title: "利用大眾運輸通勤",
//         desc: "若我們能改變每天的通勤方式，搭乘捷運、公車，或與住的近的同事共乘，<br>甚至挑戰騎腳踏車上、下班，不但能減少二氧化碳排放，<br>也能同時減少空氣污染，提高運動量！",
//         slogan: "根據環保署統計，在臺灣，包含飛機、汽車等交通運輸<br>產生的碳排放佔比約為總量的 14%。",
//     },
//     {
//         id: "todo5",
//         bigtitle: "05",
//         title: "重複利用降低物慾",
//         desc: "人類的生存活動無可避免地會消耗地球資源與能源，正因如此，<br>我們更應該對手中的物件心懷感激，正確使用每一樣產品，<br>在安全範圍內延長物品的使用壽命，尋找重複利用的可能，<br>為手中的資源，創造最大的效用。",
//         slogan: "我們所穿的每一件衣服、所用的每一項物品，<br>在生產、運送的過程中都累積了或多或少的碳足跡。",
//     },
//     {
//         id: "todo6",
//         bigtitle: "06",
//         title: "轉用電動車",
//         desc: "減少對化石燃料的依賴&　　　　　- 降低車輛行進過程中產生的碳排放與空氣污染<br><br>- 電動車減速可回充電力，因此在塞車怠速時能將動能轉為電能，<br>　適合住家附近缺乏大眾運輸工具的通勤族作為代步工具",
//         slogan: "使用電動車有什麼優點？",
//     },
//     {
//         id: "todo7",
//         bigtitle: "07",
//         title: "親近再生能源",
//         desc: "無論是在自家屋頂、廠房安裝太陽能板，或是參與公民電廠集資，<br>甚至是在社區大會中提議使用再生能源，都是增加社會大眾對再生能源的認識、<br>加速再生能源成長的養分與推力。",
//         slogan: "我們可以選擇親近相較之下更環保、永續的再生能源，<br>從源頭一點一滴改變我們的能源使用習慣！",
//     }
// ])

var productDB = DB.create("product.db"); //上架資料庫
// productDB.ensureIndex({ fieldName: "id", unique: true });

var formidable = require("formidable");
var probe = require("probe-image-size");

server.set("view engine", "ejs");
server.set("views", __dirname + "/views");

// server.post("/add", function (req, res) {  //上架
//     var form = new formidable.IncomingForm({ maxFileSize: 400 * 1024 }); //圖片大小

//     form.parse(req, function (err, fields, files) {
//         if (err) {
//             res.render("error", { error: err.message, next: "/shop.html" });
//         } else {
//             var newComm = fields;
//             newComm.price = parseInt(newComm.price); //價錢變成整數
//             var ext = files.poster.originalFilename.split(".")[1]; //把照片名稱改成自己的學號 用.分開
//             newComm.poster = fields.price+"."+ext; //把照片名稱改成自己的學號
//             var posterPath = "OBJ/files/"+newComm.poster; //存在這裡

//             //確認照片尺寸
//             var input = fs.createReadStream(files.poster.filepath);
//             probe(input).then(result => {
//                 if (result.width == 1109 && result.height == 1479) {
//                     //insert to DB
//                     productDB.update({ comm: newComm.comm }, newComm, { upsert: true }).then(doc => {})
//                     //move to upload/files
//                     fs.renameSync(files.poster.filepath, posterPath);
//                     res.render("success", { msg: "Uploaded succeful!", next: "/shop.html", img: "files/" + files.poster });
//                 } else {
//                     res.render("error", { error: "Image sizes are not 800x400", next: "/shop.html" });
//                 }
//             })
//         }
//     })
// })
server.post("/add", function (req, res) {
    var form = new formidable.IncomingForm({ maxFileSize: 900 * 1024 }); //設定圖片大小上限

    form.parse(req, function (err, fields, files) { //把表單元素的輸入值轉換成物件
        if (err) { //如果錯誤直接顯示錯誤
            res.render("error", { error: err.message, next: "/add.html" });
        } else {
            var newGame = fields;
            newGame.price = parseInt(newGame.price); //變成整數
            var ext = files.poster.originalFilename.split(".")[1];
            newGame.poster = fields.id + "." + ext;
            var posterPath = "OBJ/files/" + newGame.poster;

            //check image size
            var input = fs.createReadStream(files.poster.filepath); //確認名稱是poster的圖片尺寸
            probe(input).then(result => {
                if (result.width == 400 && result.height == 400) { //設定圖片尺寸
                    //insert to DB
                    newGame.poster = "files/"+ newGame.poster;
                    productDB.update({ id: newGame.id }, newGame, { upsert: true }).then(doc => { })//對了就傳進來
                    //move to upload/files
                    fs.renameSync(files.poster.filepath, posterPath); //把圖片重新命名 從files.poster.filepath傳到posterPath(43行)
                    res.render("success", { msg: "Uploaded succeful!", next: "/shop.html", img: newGame.poster }); //顯示正確頁面 ejs
                } else {
                    res.render("error", { error: "Image sizes are not 800x400", next: "/add.html" }); //顯示錯誤頁面 ejs
                }
            })
        }
    })
})
//我們可以怎麼做
server.get("/todo", function (req, res) {
    todoDB.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    })
})
//動物小知識
server.get("/tip", function (req, res) {
    tipDB.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    })
})

//購物車上架
server.get("/shop", function (req, res) {
    productDB.find({}).then(results => {
        if (results != null) {
            res.send(results);
        } else {
            res.send("Error!");
        }
    })
})

// server.get("", function (req, res) {
//     res.send("");
//     res.redirect("/index Vue.html"); //找檔案時只需要找index.html
// });

// server.post("", function (req, res) {
//     console.log(req.body);
//     ContactDB.insert(req.body);  //加入資料庫
//     res.send();
//     // res.redirect("/index Vue.html");  //找檔案時只需要找index.html
// })

server.listen(8080, function () {
    console.log("Server is running at port 8080!")
})
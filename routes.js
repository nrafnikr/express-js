const res = require("express/lib/response");
const { process_params } = require("express/lib/router");

const router = require("express").Router();
let mahasiswa = [
  {
    id: "1",
    nama: "melly",
    jurusan: "business",
  },
  {
    id: "2",
    nama: "lucky",
    jurusan: "management",
  },
  {
    id: "3",
    nama: "githa",
    jurusan: "export import",
  },
];

let makanan = [
    {
        id:"1",
        nama: "burger",
        category:"fastfood"
    },
    {
        id:"2",
        nama: "candy",
        category:"junkfood"
    },
    {
        id:"3",
        nama: "ice cream",
        category:"junkfood"
    },
    {
        id:"4",
        nama: "sandwich",
        category:"fashfood"
    }
]



router.get("/", (req, res) => {
  res.json(mahasiswa);
});

router.get("/user/:id", (req, res) => {
  let data = mahasiswa.filter((e) => e.id === req.params.id);
  if (data.length === 0) {
    data = { status: "Not Found", message: `Data ID ${req.params.id} Tidak Ada` };
  }
  res.json(data)
});

router.get("/makanan",(req,res)=>{
    res.json(makanan)
})

router.get("/makanan/:nama",(req,res)=>{
    let data = makanan.filter((e)=> e.nama.includes(req.params.nama));
    if(data.length === 0){
        data= {
            status: "Not Found",
            message: "Makanan Tidak Ditemukan"
        }
    }
    res.json(data)
})



module.exports = router;
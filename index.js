


const express = require("express")
const server= express()

server.use(express.json())

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

const drugs = [

    { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },
   
    { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },
   
    { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },
   
    { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },
   
    { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },
   
    { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },
   
    { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },
   
    { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },
   
    { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },
   
    { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },
   
    { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },
   
    { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },
   
    { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },
   
    { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },
   
    { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },
   
    { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },
   
    { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },
   
    { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },
   
    { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },
   
    { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }
   
   ];

   // 1
server.get('/anti', (req, resp) => {
    const antibio = drugs.filter((drug) =>{
      return drug.category === "Antibiotic"
    })
    resp.json(antibio)
})

// 2

server.get('/drug-name', (req, resp) => {

    const allDrugNm = drugs.map((drug) => {
         return drug.name.toLowerCase()
    })

    resp.json(allDrugNm)
})

// 3

server.post('/drug-cat', (req, resp) => {
    
          const category  = req.body.category;

            resp.json(
          drugs.filter(drug => drug.category === category)
      )
})


//4

server.get('/drug-manufacturers', (req, resp) => {
    const result = drugs.map(drug => ({
      name: drug.name,
      manufacturer: drug.manufacturer
    }))
    resp.json(result)
  })

// 5
server.get('/drug-prescript', (req, resp) => {
    const prescriptionDrugs = drugs.filter(drug => drug.isPrescriptionOnly)
    resp.json(prescriptionDrugs)
  })


  // 6
  server.get('/drug-formatted', (req, resp) => {
    const formatted = drugs.map(drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`)
    resp.json(formatted);
  })


  // 7
  server.get('/low-stock', (req, resp) => {
    const lowStock = drugs.filter(drug => drug.stock < 50);
    resp.json(lowStock)
  })

  // 8

  server.get('/non-prescription', (req, resp) => {
    const nonPrescription = drugs.filter(drug => !drug.isPrescriptionOnly);
    resp.json(nonPrescription)
  })

  // 9

  server.post('/manufacturer-count', (req, resp) => {
    
    const  manufacturer  = req.body.manufacturer;
      const count = drugs.filter(drug => drug.manufacturer === manufacturer)
    resp.json(count.length)
  })

  // 10
   server.get('/drug-analgesics', (req, resp) => {
    let analgesicCount = 0;
          drugs.forEach((drug) => {
            if (drug.category === "Analgesic") analgesicCount++
          })
    resp.json({ analgesicCount });
  });

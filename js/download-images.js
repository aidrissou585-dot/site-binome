const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Liste des images avec leurs alternatives
const IMAGES = {
  hero3: {
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80",
    alt: "https://via.placeholder.com/1600x900?text=Image+alternative+hero3"
  },
  hero4: {
    url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80",
    alt: "https://via.placeholder.com/1600x900?text=Image+alternative+hero4"
  },
  eau: {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Rotterdam_Waterplein_Benthemplein.jpg",
    alt: "https://via.placeholder.com/1600x900?text=Image+alternative+eau"
  },
  chaleur: {
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80",
    alt: "https://via.placeholder.com/1600x900?text=Image+alternative+chaleur"
  }
};

// Fonction pour télécharger une image
const downloadImage = async (url, filename) => {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0 Safari/537.36"
      }
    });

    const filePath = path.resolve(__dirname, "images", filename);
    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    throw new Error(`Erreur lors du téléchargement : ${error.message}`);
  }
};

// Fonction principale pour télécharger toutes les images
const downloadAllImages = async () => {
  const imagesDir = path.resolve(__dirname, "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }

  for (const [key, { url, alt }] of Object.entries(IMAGES)) {
    const filename = `${key}.jpg`;
    console.log(`Téléchargement de ${filename}...`);

    try {
      // Tente de télécharger l'image principale
      await downloadImage(url, filename);
      console.log(`✅ ${filename} téléchargé avec succès.`);
    } catch (error) {
      console.error(`❌ Échec du téléchargement de ${filename}: ${error.message}`);
      console.log(`🔄 Tentative de téléchargement de l'image alternative pour ${filename}...`);

      // Tente de télécharger l'image alternative
      try {
        await downloadImage(alt, filename);
        console.log(`✅ Image alternative pour ${filename} téléchargée avec succès.`);
      } catch (altError) {
        console.error(`❌ Échec du téléchargement de l'image alternative pour ${filename}: ${altError.message}`);
      }
    }
  }

  console.log("Téléchargement terminé !");
};

downloadAllImages();
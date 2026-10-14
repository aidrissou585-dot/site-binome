const I = (url, alt, cap, cr) => ({ url, alt, cap, cr });
const IMAGES = {
  hero1: I("js/images/photo-1477959858617-67f85cf4f1df.jpg", "Vue aérienne d'une grande ville", "Ville en mutation", "Local"),
  hero2: I("js/images/photo-1518005020951-eccb494ad742.jpg", "Façade végétalisée moderne", "Façade végétalisée", "Local"),
  hero3: I("js/images/photo-1449824913935-59a10b8d2000.jpg", "Rue urbaine avec arbres", "Rue ombragée", "Local"),
  hero4: I("js/images/photo-1466611653911-95081537e5b7.jpg", "Panneaux solaires et ciel bleu", "Énergie solaire", "Local"),
  eau: I("js/images/Rotterdam_Waterplein_Benthemplein.jpg", "Place d'eau à Rotterdam", "Place d'eau, Rotterdam", "Local"),
  chaleur: I("js/images/photo-1500382017468-9049fed747ef.jpg", "Arbres et ombrage naturel", "Ombrage naturel", "Local"),
  mobilite: I("js/images/Copenhagen_bike_lane.jpg", "Piste cyclable à Copenhague", "Vélo à Copenhague", "Local"),
  logement: I("js/images/photo-1564013799919-ab600027ffc6.jpg", "Logements collectifs modernes", "Logement durable", "Local"),
  avant: I("js/images/photo-1477959858617-67f85cf4f1df.jpg", "Rue minérale sans arbres", "Avant : béton et chaleur", "Local"),
  apres: I("js/images/photo-1519331379826-f10be5486c6f.jpg", "Rue végétalisée avec arbres", "Après : verdure et ombre", "Local"),
  garoua: I("js/images/Garoua_Benue.jpg", "Fleuve Bénoué à Garoua", "Garoua et la Bénoué", "Local"),
  maroua: I("js/images/Maroua_Cameroon.jpg", "Ville de Maroua et ses monts", "Maroua", "Local"),
  toit: I("js/images/photo-1558904541-efa843a96f01.jpg", "Toit végétalisé", "Toit vert", "Local"),
  noue: I("js/images/photo-1416879595882-3373a0480b5b.jpg", "Jardin de pluie", "Jardin de pluie", "Local"),
  terre: I("js/images/photo-1518780664697-55e3ad937233.jpg", "Bâtiment en terre", "Matériaux locaux", "Local")
};
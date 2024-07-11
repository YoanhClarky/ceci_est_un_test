import express from "express";
import ProduitsRoutes from "./routes/ProduitsRoutes";
import QuartierRoutes from "./routes/QuartiersRoutes";
import VillesRoutes from "./routes/VillesRoutes";
import ArrondissementsRoutes from "./routes/ArrondissementsRoutes";
import UsersRoutes from "./routes/UsersRoutes";

const server = express();

server.use(express.json());
server.use("/produits", ProduitsRoutes);
server.use("/quartiers", QuartierRoutes);
server.use("/villes", VillesRoutes);
server.use("/arrondissements", ArrondissementsRoutes);
server.use("/users", UsersRoutes);

export default server;

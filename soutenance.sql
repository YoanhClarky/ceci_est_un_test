-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 11 juil. 2024 à 15:50
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `soutenance`
--

-- --------------------------------------------------------

--
-- Structure de la table `arrondissements`
--

CREATE TABLE `arrondissements` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `ville_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `arrondissements`
--

INSERT INTO `arrondissements` (`id`, `name`, `ville_id`) VALUES
(1, 'Ar1_PN', 1),
(2, 'Ar2_PN', 1),
(3, 'Ar1_BZ', 2),
(4, 'Ar2_BZ', 2);

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `prix` int(11) NOT NULL,
  `categorie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `quartiers`
--

CREATE TABLE `quartiers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `arrondissement_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `quartiers`
--

INSERT INTO `quartiers` (`id`, `name`, `arrondissement_id`) VALUES
(1, 'Quartier 1', 1),
(2, 'Quartier 2', 1),
(3, 'Quartier 3', 2),
(4, 'Quartier 4', 2),
(5, 'Quartier 5', 3),
(6, 'Quartier 6', 3),
(7, 'Quartier 7', 4),
(8, 'Quartier 8', 4);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `quartier_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `nom`, `prenom`, `age`, `quartier_id`) VALUES
(1, 'Habitant 123', 'Yoanh', 23, 1),
(2, 'Habitant 455', 'Eric', 23, 1),
(3, 'Habitant 678', 'Eric', 23, 1),
(4, 'Habitant 231', 'Eric', 23, 2);

-- --------------------------------------------------------

--
-- Structure de la table `villes`
--

CREATE TABLE `villes` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `villes`
--

INSERT INTO `villes` (`id`, `name`) VALUES
(1, 'Pointe_Noire'),
(2, 'Brazzaville');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `arrondissements`
--
ALTER TABLE `arrondissements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_df057f675e9f712b432c24df282` (`ville_id`);

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `quartiers`
--
ALTER TABLE `quartiers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_e46fe4b315ca886cca9996bcd90` (`arrondissement_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_32ad01a775ca24959f6020fce7b` (`quartier_id`);

--
-- Index pour la table `villes`
--
ALTER TABLE `villes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `arrondissements`
--
ALTER TABLE `arrondissements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `quartiers`
--
ALTER TABLE `quartiers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `villes`
--
ALTER TABLE `villes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `arrondissements`
--
ALTER TABLE `arrondissements`
  ADD CONSTRAINT `FK_df057f675e9f712b432c24df282` FOREIGN KEY (`ville_id`) REFERENCES `villes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `quartiers`
--
ALTER TABLE `quartiers`
  ADD CONSTRAINT `FK_e46fe4b315ca886cca9996bcd90` FOREIGN KEY (`arrondissement_id`) REFERENCES `arrondissements` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_32ad01a775ca24959f6020fce7b` FOREIGN KEY (`quartier_id`) REFERENCES `quartiers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

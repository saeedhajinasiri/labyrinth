-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 25, 2023 at 09:15 AM
-- Server version: 10.6.12-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.2-1ubuntu2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `labyrinth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `labyrinths`
--

CREATE TABLE `labyrinths` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `start_x` int(11) DEFAULT NULL,
  `start_y` int(11) DEFAULT NULL,
  `end_x` int(11) DEFAULT NULL,
  `end_y` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labyrinths`
--

INSERT INTO `labyrinths` (`id`, `user_id`, `start_x`, `start_y`, `end_x`, `end_y`, `created_at`) VALUES
(1, 1, 1, 2, 5, 1, '2023-10-25 12:29:25'),
(2, 1, 3, 3, 4, 1, '2023-10-25 12:29:27');

-- --------------------------------------------------------

--
-- Table structure for table `labyrinth_blocks`
--

CREATE TABLE `labyrinth_blocks` (
  `id` int(11) NOT NULL,
  `labyrinth_id` int(11) NOT NULL,
  `x` int(11) NOT NULL,
  `y` int(11) NOT NULL,
  `type` enum('empty','filled') NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `labyrinth_blocks`
--

INSERT INTO `labyrinth_blocks` (`id`, `labyrinth_id`, `x`, `y`, `type`, `created_at`) VALUES
(1, 1, 1, 1, 'filled', '2023-10-25 12:30:56'),
(12, 1, 1, 2, 'empty', '2023-10-25 09:01:12'),
(13, 1, 1, 3, 'empty', '2023-10-25 09:01:12'),
(14, 1, 1, 4, 'empty', '2023-10-25 09:01:12'),
(15, 1, 2, 1, 'empty', '2023-10-25 09:01:12'),
(16, 1, 2, 2, 'filled', '2023-10-25 09:01:12'),
(17, 1, 2, 3, 'empty', '2023-10-25 09:01:12'),
(18, 1, 2, 4, 'filled', '2023-10-25 09:01:12'),
(19, 1, 3, 1, 'empty', '2023-10-25 09:01:12'),
(20, 1, 3, 2, 'empty', '2023-10-25 09:01:12'),
(21, 1, 3, 3, 'empty', '2023-10-25 09:01:12'),
(22, 1, 3, 4, 'empty', '2023-10-25 09:01:12'),
(23, 1, 4, 1, 'filled', '2023-10-25 09:01:12'),
(24, 1, 4, 2, 'empty', '2023-10-25 09:01:12'),
(25, 1, 4, 3, 'empty', '2023-10-25 09:01:12'),
(26, 1, 4, 4, 'filled', '2023-10-25 09:01:12'),
(27, 1, 5, 1, 'empty', '2023-10-25 09:01:12'),
(28, 1, 5, 2, 'filled', '2023-10-25 09:01:12'),
(29, 1, 5, 3, 'empty', '2023-10-25 09:01:12'),
(30, 1, 5, 4, 'empty', '2023-10-25 09:01:12'),
(31, 1, 6, 1, 'empty', '2023-10-25 09:01:12'),
(32, 1, 6, 2, 'empty', '2023-10-25 09:01:12'),
(33, 1, 6, 3, 'filled', '2023-10-25 09:01:12'),
(34, 1, 6, 4, 'empty', '2023-10-25 09:01:12'),
(35, 1, 7, 1, 'empty', '2023-10-25 09:01:12'),
(36, 1, 7, 2, 'empty', '2023-10-25 09:01:12'),
(37, 1, 7, 3, 'empty', '2023-10-25 09:01:12'),
(38, 1, 7, 4, 'empty', '2023-10-25 09:01:12'),
(39, 2, 1, 1, 'filled', '2023-10-25 09:01:12'),
(40, 2, 1, 2, 'empty', '2023-10-25 09:01:12'),
(41, 2, 1, 3, 'empty', '2023-10-25 09:01:12'),
(42, 2, 1, 4, 'empty', '2023-10-25 09:01:12'),
(43, 2, 1, 5, 'empty', '2023-10-25 09:01:12'),
(44, 2, 2, 1, 'empty', '2023-10-25 09:01:12'),
(45, 2, 2, 2, 'empty', '2023-10-25 09:01:12'),
(46, 2, 2, 3, 'filled', '2023-10-25 09:01:12'),
(47, 2, 2, 4, 'filled', '2023-10-25 09:01:12'),
(48, 2, 2, 5, 'empty', '2023-10-25 09:01:12'),
(49, 2, 3, 1, 'empty', '2023-10-25 09:01:12'),
(50, 2, 3, 2, 'filled', '2023-10-25 09:01:12'),
(51, 2, 3, 3, 'empty', '2023-10-25 09:01:12'),
(52, 2, 3, 4, 'filled', '2023-10-25 09:01:12'),
(53, 2, 3, 5, 'empty', '2023-10-25 09:01:12'),
(54, 2, 4, 1, 'empty', '2023-10-25 09:01:12'),
(55, 2, 4, 2, 'filled', '2023-10-25 09:01:12'),
(56, 2, 4, 3, 'empty', '2023-10-25 09:01:12'),
(57, 2, 4, 4, 'empty', '2023-10-25 09:01:12'),
(58, 2, 4, 5, 'empty', '2023-10-25 09:01:12'),
(59, 2, 5, 1, 'empty', '2023-10-25 09:01:12'),
(60, 2, 5, 2, 'filled', '2023-10-25 09:01:12'),
(61, 2, 5, 3, 'empty', '2023-10-25 09:01:12'),
(62, 2, 5, 4, 'empty', '2023-10-25 09:01:12'),
(63, 2, 5, 5, 'empty', '2023-10-25 09:01:12');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1697810765749, 'CreateUsersTable1697810765749'),
(2, 1697810803831, 'CreateLabyrinthsTable1697810803831'),
(3, 1697810807293, 'CreateLabyrinthBlocksTable1697810807293');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `username`, `password`, `created_at`) VALUES
(1, '', 'test', '$2b$10$HHA72uoXmBW.VcjHjBX4TOeMlRcOMu4XwvmNeLrk.o.whL14UaEEm', '2023-10-25 12:29:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `labyrinths`
--
ALTER TABLE `labyrinths`
  ADD PRIMARY KEY (`id`),
  ADD KEY `labyrinths_user_id_foreign` (`user_id`);

--
-- Indexes for table `labyrinth_blocks`
--
ALTER TABLE `labyrinth_blocks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `labyrinth_blocks_labyrinth_id_foreign` (`labyrinth_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UQ_fe0bb3f6520ee0469504521e710` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `labyrinths`
--
ALTER TABLE `labyrinths`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `labyrinth_blocks`
--
ALTER TABLE `labyrinth_blocks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `labyrinths`
--
ALTER TABLE `labyrinths`
  ADD CONSTRAINT `labyrinths_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `labyrinth_blocks`
--
ALTER TABLE `labyrinth_blocks`
  ADD CONSTRAINT `labyrinth_blocks_labyrinth_id_foreign` FOREIGN KEY (`labyrinth_id`) REFERENCES `labyrinths` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

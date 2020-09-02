-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2020 a las 00:06:30
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `foro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `app`
--

CREATE TABLE `app` (
  `app_id` int(11) NOT NULL,
  `app_text` varchar(40) NOT NULL,
  `app_icon` text NOT NULL,
  `app_novedades` text NOT NULL,
  `app_estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `app`
--

INSERT INTO `app` (`app_id`, `app_text`, `app_icon`, `app_novedades`, `app_estado`) VALUES
(1, 'pINTEGRO', 'http://micromax.ddns.net/img/pINT.088ff9c4.png', '<li>Búsqueda en los cobros \r\nregistrados </li>\r\n<li>Cobradores en orden \r\nAlfabético</li>\r\n<li>Mejora visual en la\r\ntransferencia</li>\r\n<li>Confirmación antes\r\nde transferir archivos</li>\r\n<li>Control de fecha del\r\nequipo y sistema</li>', 1),
(2, 'posINTEGRO', 'http://micromax.ddns.net/img/posINT.8e63aa63.png', '<li>Búsqueda en los cobros \r\nregistrados </li>\r\n<li>Cobradores en orden \r\nAlfabético</li>\r\n<li>Mejora visual en la\r\ntransferencia</li>\r\n<li>Confirmación antes\r\nde transferir archivos</li>\r\n<li>Control de fecha del\r\nequipo y sistema</li>', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `app`
--
ALTER TABLE `app`
  ADD PRIMARY KEY (`app_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `app`
--
ALTER TABLE `app`
  MODIFY `app_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

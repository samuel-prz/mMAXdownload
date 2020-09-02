-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-09-2020 a las 00:06:24
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
-- Estructura de tabla para la tabla `botones`
--

CREATE TABLE `botones` (
  `btn_id` int(11) NOT NULL,
  `app_id` int(11) NOT NULL,
  `btn_texto` varchar(40) NOT NULL,
  `btn_link` text NOT NULL,
  `btn_color` varchar(40) NOT NULL,
  `btn_version` int(11) NOT NULL,
  `btn_fecha` datetime NOT NULL,
  `btn_estado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `botones`
--

INSERT INTO `botones` (`btn_id`, `app_id`, `btn_texto`, `btn_link`, `btn_color`, `btn_version`, `btn_fecha`, `btn_estado`) VALUES
(1, 1, 'DEMO 1.0', '/download/', '#FF00044', 1, '2020-08-27 09:05:13', 0),
(2, 1, 'DEMO 2.0', 'undefined', '#1A237EFF', 2, '2020-08-29 09:13:07', 0),
(3, 1, 'DEMO 25.0', '/download/25', '#27F1D9FF', 25, '2020-08-29 09:15:23', 1),
(4, 1, 'DEMO 4.0', 'undefined', '#FF007DFF', 4, '2020-08-29 09:16:51', 0),
(5, 1, 'DEMO 5.0', '/download/demo5.0.apk', '#E65100FF', 5, '2020-08-29 09:20:23', 0),
(6, 1, 'aaaaaaaaa', 'aaaaaaaaaaa', '#E8FF03FF', 0, '0000-00-00 00:00:00', 0),
(7, 1, 'asdas', 'asdasd', '#2419DAFF', 0, '0000-00-00 00:00:00', 0),
(8, 1, 'Demo 7.0', '/download/', '#F314B6FF', 8, '0000-00-00 00:00:00', 0),
(9, 1, 'Button 9.0', '/download/', '#1BBBBBFF', 9, '0000-00-00 00:00:00', 0),
(10, 1, 'DEMO 3.0', '/download/btn3.0', '#691E39FF', 3, '0000-00-00 00:00:00', 0),
(11, 1, 'DEMO 4.0', '/download/4', '#33691EFF', 3, '0000-00-00 00:00:00', 1),
(12, 1, '10101', '0101', '#872121FF', 101, '0000-00-00 00:00:00', 0),
(13, 1, 'BOTTON', '/dddddddddd/a', '#5F7474FF', 10, '0000-00-00 00:00:00', 1),
(14, 2, 'Pos 1.0', '/download', '#FF0000FF', 45, '0000-00-00 00:00:00', 1),
(15, 2, 'PosINTEGRO', '/down', '#043B0EFF', 1, '0000-00-00 00:00:00', 1),
(16, 2, 'LOL', '/LOL/', '#06CFE3FF', 2, '0000-00-00 00:00:00', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `botones`
--
ALTER TABLE `botones`
  ADD PRIMARY KEY (`btn_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `botones`
--
ALTER TABLE `botones`
  MODIFY `btn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

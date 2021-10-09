#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi
import cgitb

cgitb.enable()
from db import Doctor

print('Content-type: text/html; charset=UTF-8')
print('')

utf8stdout = open(1, 'w', encoding='utf-8', closefd=False)

doctor = Doctor("localhost", "root", "", "ejercicio4")
query = doctor.get_doctors()

html = f"""
<!DOCTYPE html>
<html lang="es">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8" /> <!-- Declaring enconding as UTF 8-->
    <title> Ejercicio 3</title> <!-- Title in pestaña -->
    <link rel="stylesheet" type="text/css" media="screen"  href="../style.css" />    <!-- CSS: -->
    <script src="jquery-3.5.0.js"></script>  <!-- Importing JQUERY  -->
</head>
<body>

<ul class="topnav">
  <li><a class="active" href="../index.html">Inicio</a></li>
  <li><a href="../add_doctor.html">Agregar Datos de Médico</a></li>
</ul>

<div>
    
"""

if query:
    html += """
    <table>
        <tr>
            <th> Nombre </th>
            <th> Experiencia </th>
            <th> Especialidad </th>
            <th> Foto </th>
            <th> Email </th>
            <th> Celular </th>
        </tr>
    """
    for fila in query:
        html += f"""
            <tr>
                <td> {fila[0]} </td>
                <td> {fila[1]} </td>
                <td> {fila[2]} </td>
                <td> {fila[3]} </td>
                <td> {fila[4]} </td>
                <td> {fila[5]} </td>
            </tr>
    """
    html += """
    </table>
    """
else:
    html += f"""
    No se encontraron médicos :(
    """

html += f"""
</div>
</body>
"""
print(html, file=utf8stdout)

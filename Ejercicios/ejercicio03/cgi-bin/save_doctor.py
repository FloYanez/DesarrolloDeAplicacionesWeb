#!/usr/bin/python3
# -*- coding: utf-8 -*-

import cgi
import cgitb
from db import Doctor
cgitb.enable()

print('Content-type: text/html; charset=UTF-8')
print('')
utf8stdout = open(1, 'w', encoding='utf-8', closefd=False)

form = cgi.FieldStorage()
doctor = Doctor("localhost", "root", "", "ejercicio3")
data = (
    form['nombre-medico'].value,
    form['experiencia-medico'].value,
    form['especialidad-medico'].value,
    form['foto-medico'].value,
    form['email-medico'].value,
    form['celular-medico'].value
)
doctor.save_doctor(data)

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
<h1> Los datos fueron enviados </h1>
</div>

</body>
"""
print(html, file=utf8stdout)

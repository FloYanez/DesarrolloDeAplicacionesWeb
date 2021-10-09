#!/usr/bin/python3
# -*- coding: utf-8 -*-
import mysql.connector


class Doctor:
    def __init__(self, host, user, password, database):
        # Connect to database
        self.db = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.db.cursor()

    def save_doctor(self, data):
        command = '''
            INSERT INTO medico (nombre, experiencia, especialidad, foto, email, celular)
            VALUES (%s, %s, %s, %s, %s, %s)
        '''
        self.cursor.execute(command, data)  # Ejecutar consulta
        self.db.commit()  # Guardar cambios en base de datos.

    def get_doctors(self):
        self.cursor.execute("SELECT * FROM medico")
        return self.cursor.fetchall()  # Retorna query

    def save_file(self, foto):
        nombre = foto.filename
        if not nombre:
            print("Error al subir archivo.")
            exit()
            
        command = '''
            INSERT INTO archivo (nombre, path, tamaño, tipo)
            VALUES (%s, %s, %s, %s)
        '''
        self.cursor.execute(command, data)  # Ejecutar consulta
        self.db.commit()  # Guardar cambios en base de datos.

    def get_files(self):
        self.cursor.execute("SELECT * FROM archivo")
        return self.cursor.fetchall()  # Retorna query

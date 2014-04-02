# Imports
import sqlite3


conn = sqlite3.connect('cinemaDB.db')
c = conn.cursor()


def create_table():
    c.execute("CREATE TABLE movies (ID INTEGER PRIMARY KEY, Name TEXT, Rating INT)")

    c.execute("CREATE TABLE projection (ID INTEGER PRIMARY KEY, movie_id INT, type TEXT, date TEXT, time TEXT, FOREIGN KEY (movie_id) REFERENCES movie(ID))")

    c.execute("CREATE TABLE reservation (ID INTEGER PRIMARY KEY, user TEXT, projection_id INT, row INT, column INT, FOREIGN KEY (projection_id)REFERENCES projection(ID))")


def insert_data_movies():

    c.execute("INSERT INTO movies (Name, Rating) VALUES (?, ?)", ("The Hunger Games: Catching Fire", 7.9))

    c.execute("INSERT INTO movies (Name, Rating) VALUES (?, ?)", ("Wreck-It Ralph", 7.8))

    c.execute("INSERT INTO movies (Name, Rating) VALUES (?, ?)", ("HEr", 8.3))

    conn.commit()


def insert_data_projection():

    c.execute("INSERT INTO projection (movie_id, type, date, time) VALUES (?, ?, ?, ?)", (1, '3D', '2014-04-01', '19:10'))

    c.execute("INSERT INTO projection (movie_id, type, date, time) VALUES (?, ?, ?, ?)", (1, '2D', '2014-04-01', '19:10'))

    c.execute("INSERT INTO projection (movie_id, type, date, time) VALUES (?, ?, ?, ?)", (1, '4DX', '2014-04-02', '21:00'))

    c.execute("INSERT INTO projection (movie_id, type, date, time) VALUES (?, ?, ?, ?)", (3, '2D', '2014-04-05', '22:20'))

    c.execute("INSERT INTO projection (movie_id, type, date, time) VALUES (?, ?, ?, ?)", (2, '3D', '2014-04-02', '22:00'))

    c.execute("INSERT INTO projection (movie_id, type, date, time) VALUES (?, ?, ?, ?)", (2, '2D', '2014-04-02', '19:30'))

    conn.commit()


def insert_data_reservation():

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("RadoRado", 1, 2, 1))

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("RadoRado", 1, 3, 5))

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("RadoRado", 1, 7, 8))

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("IvoIvo", 3, 1, 1))

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("IvoIvo", 3, 1, 1))

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("Mysterious", 5, 2, 3))

    c.execute("INSERT INTO reservation (user, projection_id, row, column) VALUES (?, ?, ?, ?)", ("Mysterious", 5, 2, 4))

    conn.commit()


def main():
    create_table()
    insert_data_movies()
    insert_data_projection()
    insert_data_reservation()

if __name__ == '__main__':
    main()

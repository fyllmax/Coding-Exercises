# Import
import sqlite3


# Function
class MovieReservationSystem():

    """docstring for MovieReservationSystem"""

    def __init__(self):

        self.conn = sqlite3.connect('cinemaDB.db')
        self.c = self.conn.cursor()

    def movies_in_cinema(self):
        print("Current movies:")

        sql_to_read = "SELECT ID, Name, Rating FROM movies"
        for row in self.c.execute(sql_to_read):
            print("[{}] - {} ({})".format(row[0], row[1], row[2]))

    def show_movies(self):
        print("Current movies:")

        sql_to_read = "SELECT ID, Name, Rating FROM movies ORDER BY rating ASC"
        for row in self.c.execute(sql_to_read):
            print("[{}] - {} ({})".format(row[0], row[1], row[2]))

    def show_movie_projections(self, movie_id):

        movie = self.c.execute("SELECT Name FROM movies where ID = ?", (movie_id,)).fetchone()[0]

        print("")
        print("Projections for movie '{}':".format(movie))

        sql_to_read = "SELECT ID, date, time, type FROM projection where movie_id = ?"

        for row in self.c.execute(sql_to_read, (movie_id,)):
            print("[{}] - {} ({})".format(row[0], row[1], row[2], row[3]))

    def show_movie_projections_by_date(self, movie_id, date):

        movie = self.c.execute("SELECT Name FROM movies where ID = ?", (movie_id,)).fetchone()[0]

        date = self.c.execute("SELECT date FROM projection where date = ?", (date,)).fetchone()[0]

        print("")
        print("Projections for movie '{}' on date {}:".format(movie, date))

        sql_to_read = "SELECT ID, time, type FROM projection where date = ?"

        for row in self.c.execute(sql_to_read, (date,)):
            print("[{}] - {} ({})".format(row[0], row[1], row[2]))

    def make_reservation(self):

        print("Step 1")
        user_name = input("Choose name>")
        ticket_num = input("Choose number of tickets>")
        print("Current movies:" + self.movies_in_cinema())

        print("Step 2 Choose a movie")
        choose_movie = input("Choose a movie>")
        print(self.show_movie_projections(choose_movie))

        print("Step 3 - Choose a projection")
        choose_projection = input("Choose a projection> ")

        seats = [
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
            ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]]

        print("Available seats marked with 0s")
        print(' ' + ' ' + '1 2 3 4 5 6 7 8 9 10')

        index = 1
        for i in seats:
            print("{} ".format(index) + " ".join(i))

        print("")

        seats_to_choose = 1
        while ticket_num != 0:
            choose_seat = input('Choose seat{}>'.format(seats_to_choose))
            ticket_num -= 1
            seats_to_choose += 1

# MAKE RESERVATION
# > make_reservation
# Step 1 (User): Choose name>Tedi
# Step 1 (User): Choose number of tickets> 2
# Current movies:
# [1] - The Hunger Games: Catching Fire (7.9)
# [2] - Wreck-It Ralph (7.8)
# [3] - Her (8.3)
# Step 2 (Movie): Choose a movie> 2
# Projections for movie 'Wreck-It Ralph':
# [5] - 2014-04-02 19:30 (2D) - 98 spots available
# [6] - 2014-04-02 22:00 (3D) - 100 spots availabe
# Step 3 (Projection): Choose a projection> 5
# Available seats (marked with a dot):
#    1 2 3 4 5 6 7 8 9 10
# 1  . . . . . . . . . .
# 2  . . X X . . . . . .
# 3  . . . . . . . . . .
# 4  . . . . . . . . . .
# 5  . . . . . . . . . .
# 6  . . . . . . . . . .
# 7  . . . . . . . . . .
# 8  . . . . . . . . . .
# 9  . . . . . . . . . .
# 10 . . . . . . . . . .

# Step 4 (Seats): Choose seat 1> (2,3)
# This seat is already taken!
# Step 4 (Seats): Choose seat 1> (15, 16)
# Lol...NO!
# Step 4 (Seats): Choose seat 1> (7,8)
# Step 4 (Seats): Choose seat 2> (7,7)
# This is your reservation:
# Movie: Wreck-It Ralph (7.8)
# Date and Time: 2014-04-02 19:30 (2D)
# Seats: (7,7), (7.8)
# Step 5 (Confirm - type 'finalize') > finalize
# Thanks.


def main():

    ArenaCinema = MovieReservationSystem()
    ArenaCinema.show_movies()
    ArenaCinema.show_movie_projections(1)
    ArenaCinema.show_movie_projections_by_date(1, "2014-04-01")
    ArenaCinema.make_reservation()

if __name__ == '__main__':
    main()

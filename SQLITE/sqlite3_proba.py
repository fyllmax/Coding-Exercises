import sqlite3

conn = sqlite3.connect('mailList.db')
c = conn.coursor()


def table_create():
    c.execute("CREATE TABLE mail_list (ID INTEGER PRIMARY KEY, Name text, Email text)")

#    c.execute("CREATE TABLE mail_list (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, Name text NOT NULL, Email text NOT NULL)")

# NOT NULL => force user to enter data in NOT NULL column

def data_entry():
    c.execute("INSERT INTO mail_list (Name, Email) VALUES (?, ?)", (what to insert))

    # HardCoded >>>
    # name = input("enter name>")
    # email = input("enter email>")

    # c.execute("INSERT INTO mail_list (Name, Email) VALUES (?, ?)", (name, email))
    conn.commit()


def read_data():
    sql_to_read = "SELECT * FROM mail_list WHERE keyword =?"
    search_for = rado rado
    for row in c.execute(sql_to_read, [(search_for)]):
        print row


def read_data_with_source():
    sql_to_read = "SELECT * FROM mail_list WHERE keyword =? AND source =?"
    search_for = rado rado
    source_from = facebook

    for row in c.execute(sql_to_read, [(search_for), (source_from)]):
        print row


# combinations with SELECT
# sql_to_read = "SELECT *all || spec columns* FROM table* WHERE * ? "
            # ? = OREDER BY ... ASC || DESC
            # ? = LIMIT number* OFFSET number*
            # ? = LIKE 'word*'
            # ? = LIKE 'word*%'
            # ? = LIKE 'word*%letter*%'
            # ? = LIKE '%*word*%'

# sql_to_read = "SELECT DISTINCIT *column* FROM table*"
            # returns only unique values

# sql_to_read = "SELECT min(ID), max(ID) FROM table*"
            # returns min and max ID from table

# sql_to_read = "SELECT LOWER(*column*), UPPER(*column*) FROM table*"
            # returns either column in LOWER or UPPER CASE


# How to UPDATE
# cell_to_UPDATE = "UPDATE *TableName* SET *ColumnForUpdate = WhatOupdate*  WHERE id = num*"
            # updates cell value in table

# How to DELETE
# row_to_DE;ETE = "DELETE *TableName* WHERE id = num*"
            #  deletes row from table


#        Creating FOREIGN KEY
#     (table1)          (table2)
# ==================================
# |id PRIMARY KEY|\ |id PRIMARY KEY|
# |SOME OTHER VAL| \|  id table 1  |
# |SOME OTHER VAL|  |SOME OTHER VAL|

# CREATE TABLE table1 (id PRIMARY KEY, SOME OTHER VAL, SOME OTHER VAL)
# CREATE TABLE table2 (id PRIMARY KEY, id table 1, SOME OTHER VAL, \
#                      FOREIGN KEY(id table 1) REFERENCES table1(id))


# Other Commands
# .schema *tableName* => returns columns in table
# .table   => returns tables in dB
#

from sqlalchemy import create_engine, MetaData, Table, Column, String, Integer

db = create_engine('sqlite:///tutorial.db')

db.echo = True  # Try changing this to True and see what happens

metadata = MetaData(db)

users = Table(
    'users', metadata,
    Column('user_id', Integer, primary_key=True),
    Column('name', String),
    Column('age', Integer),
    Column('password', String),)

users.create()

insert_in_table = users.insert()
# i.execute(name='Mary', age=30, password='secret')

insert_in_table.execute({'name': 'Max', 'age': 22})

# insert_in_table.execute({'name': 'John', 'age': 42},
#           {'name': 'Susan', 'age': 57},
#           {'name': 'Carl', 'age': 33})

select_from_table = users.select()
read_selected = select_from_table.execute()

row = read_selected.fetchone()
print('Id:', row[0])
print('Name:', row['name'])
print('Age:', row.age)
print('Password:', row[users.c.password])

for row in read_selected:
    print(row.name, 'is', row.age, 'years old')

[sworm](https://github.com/featurist/sworm) is a write only ORM.

It is optimised for writing graphs of related entities.
Querying, on the other hand, is done with raw SQL so you can do it fast.

This ORM avoids some of the largest issues experienced in other ORMs:

* query performance is too opaque
* N+1 queries are frequently the default
* configuring eager and lazy loading is tricky
* one-to-many, many-to-one, many-to-many relationships are notoriously difficult to get right
* lifecycle management of sessions and identity maps is rarely pleasant
* check out the massive generated SQL statements!

sworm works with multiple databases:

* Microsoft SQL Server (MSSQL)
* PostgreSQL
* MySQL
* Oracle DB
* Sqlite 3

# Telecommunications Switching Database

A relational database project designed to model telecommunications call-routing mechanics, trunk preferences, and directory matching logic.

## 📌 Features & Architecture

* **Hierarchical Call Routing:** Models complex call-termination logic using directory number (DN) and area code prefix matching.

* **Idempotent Assembly:** Includes automated SQL setup scripts that safely assemble and populate schema components without integrity loss.

* **Query Optimization:** Implemented complex join and aggregation queries across SQLite database instances.


## 📁 Repository Structure
* `/sql-solutions` - Core SQL queries (`P1_01.sql` to `P1_10.sql`) and database assembly scripts.
* `/specs` - Schema diagrams and project specifications.
* `/telephone-scripts` - Switching database instances and reference routing logic.
* `/docs` - Project documentation and notes.
* `/archive` - Archived reference materials (TA evaluation scripts, historical review code, and practice sets).
-- UP

CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT
);

-- DOWN
DROP TABLE Person;

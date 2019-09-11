# before start
>1) Edit the db.config.json file in db folder
>2) Create two mysql tables

create table urls (
    id int(11) not null auto_increment,
    url text not null,
    primary key(id)
);

create table visits (
    id int(11) not null auto_increment,
    url_id int(11) not null,
    visited_at datetime default now(),
    primary key(id)
);

# How to start
```
1) npm install or yarn install
2) npm start or yarn start
```
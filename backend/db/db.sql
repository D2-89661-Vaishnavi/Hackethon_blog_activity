-- database schema for airbnb application
DROP DATABASE IF EXISTS blogdata;
create database blogdata;
use blogdata;


create table user(
    id integer primary key auto_increment,
    full_name varchar(50),
    email varchar (30),
    password varchar(100),
    phone_no varchar(10),
    createdTimestamp DATETIME default CURRENT_TIMESTAMP,
    INDEX (id)
);

create table blogs (
    id integer primary key auto_increment,
    title varchar(20),
    contents varchar(30),
    user_id int,
    category_id int,
    createdTimestamp DATETIME default CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    INDEX (id)
);


create table categories (
    id integer primary key auto_increment,
    title varchar(30),
    description varchar(50),
    INDEX (id)
);


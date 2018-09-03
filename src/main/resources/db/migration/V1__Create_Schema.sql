Create table Patient (
id bigint auto_increment not null,
name Varchar(45) NOT NULL,
pesel int not null,
Primary Key(id)
);

create table Examination(
id bigint auto_increment not null,
type varchar(45) not null,
name varchar(45) not null,
Primary Key(id)
);

create table Patient_Examination(
id_patient bigint,
id_examination bigint,
Foreign Key (id_patient) references Patient(id),
Foreign Key (id_examination) references Examination(id)
);

Create table Question(
id bigint auto_increment not null,
name Varchar(45),
id_examination bigint,
Primary Key(id),
Foreign Key (id_examination) references Examination(id)
);

Create table Result(
id bigint auto_increment not null,
result_value Varchar(255),
id_question bigint,
id_patient bigint,
Primary Key(id),
Foreign Key (id_question) references Question(id),
Foreign Key (id_patient) references Patient(id)
);



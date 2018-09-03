Alter table Patient_Examination
add Column id bigint auto_increment,
add Primary Key(id);

Alter Table Result
drop foreign key result_ibfk_1,
Add column question_name varchar(45) not null,
Add column id_patient_examination bigint,
Add Foreign Key (id_patient_examination) references Patient_Examination(id);





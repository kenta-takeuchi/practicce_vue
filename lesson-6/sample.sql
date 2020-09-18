create table if not exists teams (
id integer primary key ,
name varchar(10)
);

create table if not exists jobs (
id integer primary key ,
name varchar(10)
);


create table if not exists staff (
id integer primary key,
name varchar(10),
job_id integer,
team_id integer,
foreign key (team_id) references teams(id),
foreign key (job_id) references jobs(id)
);

create table if not exists patients (
id integer primary key,
name varchar(10),
responsible_staff_id integer,
foreign key (responsible_staff_id) references staff(id)
);

create table if not exists avoid_times(
id integer primary key,
patient_id integer,
avoid_reason varchar(10),
start_time date,
end_time date,
foreign key (patient_id) references patients(id)
);

create table if not exists apply_times(
id integer primary key,
patient_id integer,
apply_reason varchar(10),
start_time date,
end_time date,
foreign key (patient_id) references patients(id)
);
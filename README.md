# MPI

Mpi is a movie api, created as a exercise/practicing project where i aim to develop a crud centered around movie, with this project i will try to test new functionalites and streamline some good practices.

---

## Downloading 

to get the project to work on your machine you will need to follow these steps:

1- install node and npm in your machine 
2- clone this repository 
3- run: ```npm install``` to install the dependencies
4- remove the ```.template``` from ```.env.template``` and fill it with your info
5- start the server with: ```npm start```

after doing that you should have a copy of the API running on you machine =)

---

## Movie representation:

movies will be represented as follows:

```json
{
  name:"name of the movie",
  year:"year movie was released",
  decription:"small description off the movie",
  director:"the director of the movie",
  torrent:"a working magnet link for the movie"
}
```

---

## Endpoints 

as all other cruds/apis this one will need endpoints to be connected to, these are the available endpoints to intereact with the api:

all of these endpoints will be based on /mpi/1.0

### GET /mpi/1.0/
  this endpoint will return all the movies in the database as a array

### GET /mpi/1.0/<ID>  ~*coming soon*~
  this endpoint will return the movie with the specified id

### POST /mpi/1.0/ ~*coming soon*~
  this endpoint will accept a POST request with a new movie object as the bodie, 
  and will add this movie to the database

### PATCH /mpi/1.0/<ID> ~*coming soon*~
  this endpoint will accept any valid movie parameter and will update that parameter on the movie with the given id

### DELETE /mpi/1.0/<ID> ~*coming soon*~
  this endpoint will delete the movie with the given id


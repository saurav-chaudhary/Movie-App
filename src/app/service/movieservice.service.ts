import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:HttpClient) { }
  getMovies(name:string){
  return  this.http.get(` http://www.omdbapi.com/?apikey=7fa05dc1&t=${name}`)
  }
  addMovies(item:any)
  {
   return this.http.post("http://localhost:3000/movie",item)
  }
  getMoviejson()
  {
    return this.http.get(" http://localhost:3000/movie")

  }
  delete(item:number)
  {
   return this.http.delete(` http://localhost:3000/movie/${item}`)
  }
}

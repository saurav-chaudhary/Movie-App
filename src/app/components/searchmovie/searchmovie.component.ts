import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieserviceService } from 'src/app/service/movieservice.service';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.scss']
})
export class SearchmovieComponent implements OnInit {
  public movieName:string='';
  public movie:any;
  public rat: string='';
  public x:any;
 
  constructor(private router: Router,private ms:MovieserviceService) { }

  ngOnInit(): void {
  }
  searchMovie(){
   this.ms.getMovies(this.movieName).subscribe(data=>{
   
    this.movie=data;
    console.log(this.movie);
    console.log(this.movie.Response);
    
    if(this.movie.Response=="True")
    {
      this.x=true;
    }
    else if(this.movie.Response=="False"){
      this.x=false
    }
   
   
    
    
    
   })
  }
  addMovie()
{
  let data={
    Title:this.movie.Title,
    Actors:this.movie.Actors,
    Director:this.movie.Director,
    Runtime:this.movie.Runtime,
    Poster:this.movie.Poster,
    Rating:this.rat
   // Rating:this.rat
    

  }
  this.ms.addMovies(data).subscribe(data=>{
    console.log("added");
    alert("Rating is added")
    this.router.navigate(['/movie'])
    
  })
}
rating(y:string)
{
  console.log();
  
  this.rat=y;
  
}
}

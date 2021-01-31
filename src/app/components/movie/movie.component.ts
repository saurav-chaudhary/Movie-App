import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from 'src/app/service/movieservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
public movies:any;
  constructor(private ms:MovieserviceService) { }

  ngOnInit(): void {
    this.getMovies()
  }
getMovies()
{
  
  
  this.ms.getMoviejson().subscribe(data=>{
    console.log(data);
    
    this.movies=data;
    console.log(this.movies);
    
  })
}
getRating(rate:string){
  return new Array(Number(rate));
}
delete(item:any)
{
  this.ms.delete(item.id).subscribe(data=>{
    this.getMovies();
  })
}
}

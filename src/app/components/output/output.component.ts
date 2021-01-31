import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from 'src/app/service/movieservice.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ms:MovieserviceService) { }
  public movie:any;
  public rat:string='';
  ngOnInit(): void {
    console.log("hii");
    this.route.params.subscribe(p=>{
    
     
      
      this.ms.getMovies(p['id']).subscribe(data => {
        console.log(data);
        
        this.movie = data;
    });
  });
 

}


}


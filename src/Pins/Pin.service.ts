import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Pin } from './Pin.interface';
import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';
import axios from 'axios';

@Injectable()
export class PinsService {
  private readonly pins: Pin[] = [];
  private unsplash = createApi({
    accessKey: process.env.MY_ACCESS_KEY,
    fetch: nodeFetch,
  });

  async getBySearch(query: string) {
    if(!!query && query !== ""){
        
        const data : any = await axios.get(
            'https://api.unsplash.com/search/photos?query='+query,
            {
              headers: {
                Authorization: "Client-ID "+ process.env.MY_ACCESS_KEY,
              },
            },
          );
          console.log("data search 2",data.data?.results[0]);
          
          
        return data.data?.results;
    }else{
        return this.getAll();
    }
    
    
  }
  

  async getAll()  {
    
    // let pin1 = {};
    // this.unsplash.photos.get({ photoId: 'foo' }).then(result => {
    //     if (result.errors) {
    //         // handle error here
    //         console.log('error occurred: ', result.errors);
    //       } else {
    //         // handle success here
    //         pin1 = result.response;
    //       }
    // }).catch(err => {
    //     if (err.name === 'AbortError') {
    //         console.log('Fetch aborted');
    //     }
    // });
    const { data } = await axios.get(
        'https://api.unsplash.com/photos',
        {
          headers: {
            Authorization: "Client-ID "+ process.env.MY_ACCESS_KEY,
          },
        },
      );
      
    return data
  }
}
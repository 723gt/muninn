# APIデザイン  

## POST / 
```
{
    "player_name" : "String",
    "music": "String",
    "score": Integer
}
```

## GET /
```  
{
  [
    [
      "music" : "String",
      # 1位
      {"player_name": "String",
       "score": Integer
      },
      # 2位
      {"player_name": "String",
       "score": Integer
      },
      # 3位
      {"player_name": "String",
       "score": Integer
      },
      # 4位
      {"player_name": "String",
       "score": Integer
      },
      # 5位
      {"player_name": "String",
       "score": Integer
       }
     ],
     [
      "music" : "String",
      # 1位
      {"player_name": "String",
       "score": Integer
      },
      # 2位
      {"player_name": "String",
       "score": Integer
      },
      # 3位
      {"player_name": "String",
       "score": Integer
      },
      # 4位
      {"player_name": "String",
       "score": Integer
      },
      # 5位
      {"player_name": "String",
       "score": Integer
       }
     ]
  ]
 
}
```

# CSV  
1曲1行  
曲名,順位,プレイヤー名,スコア,曲名,順位,プレイヤー名,スコア,...  
``` 
Himmel's wander,1,osugi,1234568,Himmel's wander,2,osugi,1234568,Himmel's wander,3,osugi,1234568,Himmel's wander,4,osugi,1234568,Himmel's wander,5,osugi,1234568                      
attacking ready!,1,John Doe,0,attacking ready!,2,John Doe,0,attacking ready!,3,John Doe,0,attacking ready!,4,John Doe,0,attacking ready!,5,John Doe,0                                
Who dirty hands for...,1,John Doe,0,Who dirty hands for...,2,John Doe,0,Who dirty hands for...,3,John Doe,0,Who dirty hands for...,4,John Doe,0,Who dirty hands for...,5,John Doe,0  
AxisDrive,1,John Doe,0,AxisDrive,2,John Doe,0,AxisDrive,3,John Doe,0,AxisDrive,4,John Doe,0,AxisDrive,5,John Doe,0                                                                   
Gradius,1,John Doe,0,Gradius,2,John Doe,0,Gradius,3,John Doe,0,Gradius,4,John Doe,0,Gradius,5,John Doe,0                                                                             
Glassland,1,John Doe,0,Glassland,2,John Doe,0,Glassland,3,John Doe,0,Glassland,4,John Doe,0,Glassland,5,John Doe,0                                                                   
In search of hope,1,John Doe,0,In search of hope,2,John Doe,0,In search of hope,3,John Doe,0,In search of hope,4,John Doe,0,In search of hope,5,John Doe,0                           
SP,1,John Doe,0,SP,2,John Doe,0,SP,3,John Doe,0,SP,4,John Doe,0,SP,5,John Doe,0           
NightFlight,1,John Doe,0,NightFlight,2,John Doe,0,NightFlight,3,John Doe,0,NightFlight,4,John Doe,0,NightFlight,5,John Doe,0 
```

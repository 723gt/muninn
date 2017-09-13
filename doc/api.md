# APIデザイン  

## POST / 
```
{
    "player_name" : "String",
    "music": "String",
    "scoer": Integer
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
       "scoer": Integer
      },
      # 2位
      {"player_name": "String",
       "scoer": Integer
      },
      # 3位
      {"player_name": "String",
       "scoer": Integer
      },
      # 4位
      {"player_name": "String",
       "scoer": Integer
      },
      # 5位
      {"player_name": "String",
       "scoer": Integer
       }
     ],
     [
      "music" : "String",
      # 1位
      {"player_name": "String",
       "scoer": Integer
      },
      # 2位
      {"player_name": "String",
       "scoer": Integer
      },
      # 3位
      {"player_name": "String",
       "scoer": Integer
      },
      # 4位
      {"player_name": "String",
       "scoer": Integer
      },
      # 5位
      {"player_name": "String",
       "scoer": Integer
       }
     ]
  ]
 
}
```
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

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
    "music01":[
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
    "music02":[
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
}
```
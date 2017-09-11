# muninn  
神戸電子専門学校 プログラミングコンテスト部 2017年 学園祭 A班 FantaRhythm  REST APIサーバ  

2017/9/11 吉岡 捺己 プロジェクト作成  

## 動作環境  
Node.jsを用いたREST API サーバ  
- フレームワーク  
    - Express  
- DB
    - Sqlite3  
- test  
    - supertest
    - mocha  

### 環境構築  

動作はdebian/ubuntuを想定  
nodeのバージョンは最新のTLSとし動作するものとする 

GitとSqlite3のインストール
```
$ sudo apt-get install -y sqlite3 git
```
このプロジェクトをクローンする
```
$ git clone https://github.com/723gt/muninn.git
```  

nodeのライブラリをnpm経由でインストールする  
```
$ cd muninn
$ npm install 
```

## サーバの起動  
```
$ cd muninn
$ npm start
```

## テストの実行  
```
$ cd  muninn
$ npm test
```

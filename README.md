# Graph Wars

**Clone project repository:**
```$ git clone https://github.com/Ronald-Prato/GraphWars.git stargraph```

---

**Initialize the project:**
```
cd stargraph
npm install
npm start
```

---

![](https://i.imgur.com/11XbTq9.png)
Now, just click in "Explore" button and that's it!

---

## Additional Info

I decided to make this kinda different. So I just copy the api to an AWS serverless architecture, using App Sync which is the AWS GraphQL service. And Dynamo DB to consult the api data. 

This application is ready for production without any problem with the api's ssl certificate. So this was deployed in https with this link: 

> https://stargraph-18539.web.app
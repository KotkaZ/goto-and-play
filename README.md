# goto-and-play :v:

## _Karl Rapur_

This web application is purely made for gotoAndPlay internship program.
In the background, you can see the fireworks light up randomly or by clicking.
In the foreground, the birthday card appears after 10 seconds.

## Tested compatability
Google Chrome - Version 90.0.4430.85 (Official Build) (64-bit) <br>
Firefox Browser - 88.0 (64-bit)<br>
Microsoft Edge - Version 90.0.818.46 (Official build) (64-bit)<br>
Brave Browser - Version 1.23.73 Chromium: 90.0.4430.85 (Official Build) (64-bit)



## :exclamation::exclamation::exclamation: Docker & Deployment

This project is very easy to install and deploy with Docker containers.
First, make sure your Docker engine is up and running.

```sh
cd goto-and-play
docker-compose up
```

This will take a couple of minutes on the initial start because Docker has to build images.
Once up, servers can be accessed on previously defined ports.
You can change port mappings in `docker-compose.yml`.

Another way to test out the application is via serving it. This is meant for development purposes.

```sh
npm install
npm run serve
```

By default, you can access the website [http://localhost:8080/](http://localhost:8080/)

## :blue_book: How did I approach this task?

The trickiest part was getting working fireworks. I had no experience with canvases and vector drawings.
To complete this task, I had to view some examples from the web. It seemed obvious to use canvases instead of pure CSS.
I decided to build a Vue application because of its' simple components handling. This didn't make it any harder,
because I feel quite comfortable building Vue apps. For an extra challenge, I used TypeScript, which I have been avoiding until this task.

Canvas drawings are slow when it comes to performance. I was struggling with good optimization. This application still has some performance issues
when the user decides to spam more fireworks. Possible fixes could be using canvas paths, avoiding the alpha layer, or reducing the number of operations in loops.

Time consumption:

<ol>
    <li>Project setup - 30 min</li>
    <li>Looking at the examples - 60 min</li>
    <li>Implementing fireworks - 100 min</li>
    <li>Optimizing canvases - 100 min</li>
    <li>Additional content (bcard etc.) - 45 min</li>
    <li>Writing README - 20 min</li>
</ol>

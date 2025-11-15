<h1 align="center">Portfolio</h1>
<p align="center">
  <i>
I`m developing this portfolio as a personal Angular proyect. <b>At the moment it is under development</b>, taking it as an opportunity to test things with Angular 20 as the framework is bringing many new features.</i>
</p>

---

<details open>
  <summary><b>Table of Contents</b></summary>
  <p>

- **Community**
  - [🚨 Forking this repository](#Forking-this-repository-)
  
- **Getting Started**
  - [🐳 Running with Docker](#Running-with-Docker-)
  - [🔧 Running locally](#Running-locally-)
  </p>
</details>

---

### Forking this repository 🚨 

The inspiration for the design and theme of this project is not purely mine, I consider it fair to give credit to the projects from which I have taken some ideas.

- [Rinkaswiftie Portfolio](https://github.com/Rinkaswiftie/DeveloperPortfolio)

- [saadpasta Portfolio](https://github.com/saadpasta/developerFolio)

- [andresjosehr Portfolio](https://github.com/andresjosehr/andresjosehr-portfolio/tree/master)

If anyone wishes to use this code for themselves or make improvements to the project, they are welcome to do so. I only ask that, if the project is reused, credit be given to the source(s) from which it came.

As you all know, **plagiarism is bad**. It's always disheartening to find out that someone has copied your project without giving you any credit. **As I have made an attribution to others, I hope you will do the same with this and all projects that offer you a base of ideas.**

---

### Running with Docker 🐳

Build a Docker image from the project directory

``` bash
docker build -t portfolio-image .
```

Create and start a container from the image you just built.

``` bash
docker run -d -p 8080:80 --name portfolio portfolio-image
```

Go to [http://localhost:8080](http://localhost:8080).

---

### Running locally 🔧

You need to have NPM and, optionally, Angular CLI installed on your PC. NPM is available with NodeJS in [here](https://nodejs.org/en). After you install NPM, install Angular CLI by typping the following command in your terminal

``` bash
npm install -g @angular/cli
```

Execute the following command inside the folder proyect

``` bash
npm install
```

Now just run
```
npm start
```
Wait to compilation and go to [http://localhost:4200](http://localhost:4200) after compilation finished.
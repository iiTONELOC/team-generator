const renderEngineer = require('../utils/renderFunctions');

class GeneratePage {
    constructor(
        data ='') {
            this.data = data
        // this.manager = manager
        // this.engineer = engineer
        // this.intern = intern
    }

    // renderEngineer(dataEngineer){
    //     return `${dataEngineer
    //         .map(
    //             ({
    //                 name,
    //                 id,
    //                 email,
    //                 gitHub,
    //             }) => {
    //                 return `<div class="col-1" style="width: 18rem;">
    //                 <div class="card bg-dark text-dark">
    //                     <div class="card-body bg-warning">
    //                         <h2 class="card-title">${name}</h2>
    //                         <p class="h4"><span><i class="fas fa-laptop-code"></i> </span>Engineer</p>
    //                     </div>
    //                     <div class="card-body text-white">
    //                         <ul class="list-group list-group-flush my-4">
    //                             <li class="list-group-item bg-secondary">ID: ${id} </li>
    //                             <li class="list-group-item bg-secondary">Email: <a href="mailto:${email}"> Email:
    //                             ${email} </a></li>
    //                             <li class="list-group-item bg-secondary">GitHub: <a href='https://github.com/${gitHub}' rel='noopener' target='_blank'> GitHub: ${gitHub}</a></li>
    //                         </ul>
    //                     </div>
    //                 </div>
    //             </div>`;
    //             }
    //         )
    //         .join(``)}`;
    // }

    createPage() {
        // console.log(this.manager)
        console.log([this.data.manager])
        // console.log("You might have it fuck face!")
        //console.log(this.manager.getRole());

    //     return `
    // <!doctype html>
    // <html lang="en">

    // <head>
    //     <meta charset="utf-8" />
    //     <meta http-equiv="x-ua-compatible" content="ie=edge">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <meta name="description" content="Dynamic team profile generator">
    //     <meta name="author" content="Anthony Tropeano">
    //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
    //         integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    //     <link rel="stylesheet" href="./style.css">
    //     <script src="https://kit.fontawesome.com/c7e6266a9c.js" crossorigin="anonymous"></script>
    //     <title>Profile Generator</title>
    // </head>

    // <body>
    //     <main>
    //         <div class="container-fluid">
    //             <div class="row">
    //                 <div class="col-sm-12 bg-dark text-center">
    //                     <div class="title d-flex flex-row justify-content-center align-items-center">
    //                         <h1 class="text-warning">My Team</h1>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div id="cards" class="container mt-5">
    //                 <div class="row d-flex justify-content-center align-items-center gy-4">
    //                 <div class="col-1" style="width: 18rem;">
    //                     <div class="card bg-dark text-dark">
    //                         <div class="card-body bg-warning">
    //                             <h2>${this.data.manager.getName()}</h2>
    //                             <p class="h4"><span><i class="fas fa-user-tie"></i> </span>${this.data.manager.getRole()}</p>
    //                         </div>
    //                         <div class="card-body text-white">
    //                             <ul class="list-group list-group-flush my-4 ">
    //                                 <li class="list-group-item bg-secondary">ID: ${this.data.manager.getID()} </li>
    //                                 <li class="list-group-item bg-secondary"><a href="mailto:${this.data.manager.getEmail()}"> Email:
    //                                 ${this.data.manager.getEmail()} </a> </li>
    //                                 <li class="list-group-item bg-secondary">Office number: ${this.data.manager.getOffice()}</li>
    //                             </ul>
    //                         </div>
    //                         ${renderEngineer(this.data.engineer)}
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </main>
    // </body>

    // </html>
    // `

    }




}




module.exports = GeneratePage;
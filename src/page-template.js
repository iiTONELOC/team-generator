

class GeneratePage {
    constructor(
        data ='') {
            this.data = data
    }
    
    createPage() {
        return `
        <!doctype html>
        <html lang="en">
        
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="description" content="Dynamic team profile generator">
            <meta name="author" content="Anthony Tropeano">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css">
            <script src="https://kit.fontawesome.com/c7e6266a9c.js" crossorigin="anonymous"></script>
            <link rel="shortcut icon" href="../images/icon.png" type="image/x-icon">
            <title>Profile Generator</title>
        </head>
        
        <body>
            <main>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 bg-dark text-center">
                            <div class="title d-flex flex-row justify-content-center align-items-center">
                                <h1 class="text-warning">My Team</h1>
                            </div>
                        </div>
                    </div>
                    <div id="cards" class="container mt-5">
                        <div class="row d-flex justify-content-center align-items-center gy-4">
                        ${this.data.map((employee) => {
                            return`
                            <div class="col-1" style="width: 18rem;">
                            <div class="card bg-dark text-dark">
                                <div class="card-body bg-warning">
                                    <h2>${employee.getName()}</h2>
                                    <p class="h4"><span>${employee.getOffice ? `<span><i class="fas fa-user-tie"></i>` : employee.getGitHub ? `<i class="fas fa-laptop-code"></i>` : `<i class="fas fa-user-graduate"></i>`} </span>${employee.getRole()}</p>
                                </div>
                                <div class="card-body text-white">
                                    <ul class="list-group list-group-flush my-4 ">
                                        <li class="list-group-item bg-secondary">ID: ${employee.getID()}</li>
                                        <li class="list-group-item bg-secondary"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></li>
                                        <li class="list-group-item bg-secondary"> ${employee.getOffice ? `Office: ${employee.getOffice()}`: employee.getGitHub ? `<a href="https://github.com/${employee.getGitHub()}" rel="noopener" target="_blank"> GitHub: ${employee.getGitHub()} </a>` : `School: ${employee.getSchool()}` }</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        `
                        }).join('')}
                        </div>
                    </div>
                </div>
            </main>
        </body>
        
        </html>
        `
    }
}




module.exports = GeneratePage;
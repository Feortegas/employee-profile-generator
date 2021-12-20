module.exports = function (manager, engineer, intern)  {
    

    return `
            <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Tech.com Employee Management</title>
        </head>
        <body>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                <span class="navbar-brand mb- h1">Tech.com Employee Management</span>
                </div>
            </nav>

            <div class="row align-items-center">
            <div class="col-3">
                <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${manager.role}</div>
                    <div class="card-body text-dark bg-white">
                      <h5 class="card-title">${manager.name}</h5>
                      <span class="card-text">${manager.id}</span>
                      <span class="card-text">${manager.email}</span>
                      <span class="card-text">${manager.officeNumber}</span>
                    </div>
                </div>
            </div>
          </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        </body>
        </html>`
}
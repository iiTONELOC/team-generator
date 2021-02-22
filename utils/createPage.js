const { writeFile, copyFile } = require('../utils/generateSite');
const GeneratePage = require('../src/page-template')
const createPage = (data) => {
    console.log(data)
                    let myPromise = new Promise(function (myResolve, myReject) {
                        // "Producing Code" (May take some time)
                        myResolve(new GeneratePage(data).createPage()); // when successful
                        myReject("Error");  // when error
                    });
                    // "Consuming Code" (Must wait for a fulfilled Promise)
                    myPromise.then(pageHTML => {
                        return writeFile(pageHTML);
                    })
                        .then(writeFileResponse => {
                            console.log(writeFileResponse);
                            return copyFile();
                        })
                        .then(copyFileResponse => {
                            console.log(copyFileResponse);
                        })
                        .catch(err => {
                            console.log(err);
                        });
}

module.exports=createPage
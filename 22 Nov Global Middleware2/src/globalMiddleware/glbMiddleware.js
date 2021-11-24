let captureInfo = function (req, res, next) {
     let freeApp = req.headers['isfreeapp']
     if (!freeApp) {
          res.send({ message: "the request is missing a mandatory header" })
     } else {
          if (freeApp === 'true') {
               freeApp = true
          } else {
               freeApp = false
          }
          req.isFreeAppUser = freeApp
          next();
     }
}

module.exports.captureInfo = captureInfo
var Dropbox = require('dropbox');

var dbx = new Dropbox({
  accessToken: process.env.DROPBOX_TOKEN
});

function addPayment(newRow) {
  return dbx
    .filesDownload({ path: '/gastos.csv' })
    .then(response => {
      return { data: response.fileBinary, rev: response.rev };
    })
    .then(file =>
      dbx.filesUpload({
        path: '/gastos.csv',
        mode: { '.tag': 'update', update: file.rev },
        contents: file.data + newRow
      })
    )
    .then(r => console.log('Successfully added'));
}

exports.addPayment = addPayment;

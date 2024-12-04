node {
stage('Git checkout'){
git Branch: 'master', url: 'https://github.com/ArthurBerbat/ArthurMicroservices'
}
stage('Instalação'){
npm i
}
stage('Startup server'){
npm start
}
}
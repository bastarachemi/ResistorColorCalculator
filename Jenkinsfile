pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'ng test'
      }
    }
    stage('e2e') {
      steps {
        sh 'docker build --tag project4:testimage .'
        sh 'docker run -dp 4200:4200 --name testcontainer -v "$WORKSPACE:/app" project4:testimage'
        sh 'sleep 30s'
        sh './node_modules/protractor/bin/webdriver-manager update'
        sh 'ng e2e --devServerTarget='
      }
      post {
        always {
          sh 'docker rm -f testcontainer || true'
          sh 'docker rmi -f project4:testimage || true'
        }
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker build --tag project4:deployimage .'
        sh 'docker run -dp 5000:4200 --name deploycontainer -v "$WORKSPACE:/app" project4:deployimage'
      }
      post {
        always {
          sh 'docker rm -f deploycontainer || true'
          sh 'docker rmi -f project4:deployimage || true'
        }
      }
    }
  }
}

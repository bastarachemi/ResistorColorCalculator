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
        echo "Not yet implemented"
      }    
    }
    stage('Deploy') {
      steps {
        echo "Not yet implemented"
      }
    }
  }
}

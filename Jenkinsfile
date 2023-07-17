pipeline {
    agent any
    stages {
        stage ('Setting up build Environment.'){
            agent {
                docker { 
                    image 'node:18.16.1-alpine' 
                    },
                docker { 
                    image 'nginx:1.25.1' 
                    }
                }
            steps {
                echo "Pulling Required Docker Base Images Complete."
            }
        }
        stage ('Cloning Project.'){
            steps {
                sh 'mkdir ~/temp'
                sh 'cd ~/temp'
                sh 'git clone https://github.com/anuragdchowdhury/jenkins-build.git --branch main'
                  }
        }
        stage ('Buildiing Project in Docker Image.'){
            steps {
                sh 'cd ~/temp/jenkins-build'
                sh 'docker build -t jenkins-build:1.0 .'
            }
        }
        stage ('Cleaning up residues.'){
            steps {
                sh 'rm -rf ~/temp/jenkins-build'
            }
        }
    }
    }
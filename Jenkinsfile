pipeline{
    agent any
    tools{
        nodejs 'nodejs20'
    }
    stages{
        stage('Clone repository'){
            steps{
                git 'https://github.com/WanjikuN/Snap_Safari_client.git'
            }
        }
        stage('Install dependancies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Tests'){
            post{
                failure{
                  mail bcc: '', body: 'Jenkins Test Failure', cc: '', from: '', replyTo: '', subject: 'Test Failed', to: 'wanjikunpatricia@gmail.com'  
                }
            }
            steps{
                sh 'npm test'
            }
        }
           }
}
pipeline{
    agent any
    environment {
        VERCEL_TOKEN = credentials('eqa0C0GuDZa5LeLAyb23i1if')
        VERCEL_PROJECT_ID = 'prj_X68CuvASyBkw89a8HsLilmLYMma3'
    }
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
        stage('Deploy to Vercel') {
            steps {
                script {
                    sh 'npm install -g vercel'

                    sh "vercel --token $VERCEL_TOKEN --prod --scope default --confirm --force --project $VERCEL_PROJECT_ID"
                }
            }
        }
           }
}
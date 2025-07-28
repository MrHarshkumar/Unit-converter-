pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Deploy') {
            steps {
                echo '🚀 Deploying...'
                sh 'vercel --prod --token=$VERCEL_TOKEN --yes'
            }
        }
    }
}

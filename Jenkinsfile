pipeline {
    // agent any
    agent { label 'harsh-slave' }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Link Vercel Project') {
            steps {
                echo '🔗 Linking to Vercel project...'
                sh '''
                vercel link \
                  --token=$VERCEL_TOKEN \
                  --project unit-converter \
                  --yes
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying to Vercel...'
                sh 'vercel --prod --token=$VERCEL_TOKEN --yes --confirm'
            }
        }
    }
}

pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Link Vercel Project') {
            steps {
                echo '🔗 Linking project to Vercel...'
                sh '''
                vercel link --token=$VERCEL_TOKEN --org team_XxcCiJVpjnVJyfm2S7GcTtQb --project prj_0nfmswDytXEGTn3ozx9664BIGtBb --yes
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

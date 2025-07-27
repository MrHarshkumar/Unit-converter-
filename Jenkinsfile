pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token') // 🔐 Use the ID you set
    }

    stages {
        stage('Build') {
            steps {
                echo '🔧 Building project...'
               
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests...'
               
            }
        }

        stage('Deploy to Vercel') {
            steps {
                echo '🚀 Deploying to Vercel...'
                sh '''
                    npm install -g vercel
                    vercel --prod --token=$VERCEL_TOKEN --yes
                '''
            }
        }
    }
}


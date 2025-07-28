pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
        NPM_CONFIG_PREFIX = "$HOME/.npm-global"
        PATH = "$HOME/.npm-global/bin:$PATH"
    }

    stages {
        stage('Setup Vercel CLI') {
            steps {
                echo '📦 Installing Vercel CLI...'
                sh '''
                    mkdir -p $HOME/.npm-global
                    npm install -g vercel
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying...'
                sh 'vercel --prod --token=$VERCEL_TOKEN --yes'
            }
        }
    }
}

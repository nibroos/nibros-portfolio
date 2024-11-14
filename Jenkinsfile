pipeline {
    agent any

    environment {
        GIT_REPO = 'git@github.com:nibroos/nibros-portfolio.git'
        VPS_USER = credentials('vps-user-27')
        VPS_HOST = credentials('vps-host-27')
        VPS_DEPLOY_DIR = credentials('vps-deploy-dir-nibros-portfolio')
        BUN_INSTALL = credentials('bun-install')
        PATH = "${BUN_INSTALL}/bin:${env.PATH}"
        BUILD_DIR = "build-${env.BUILD_ID}"
        APP_NAME = credentials('app-name-nibros-portfolio')
        FRONTEND_URL = credentials('frontend-url-nibros-portfolio')
        DOMAIN = credentials('domain-nibros-portfolio')
        DOCS_URL = credentials('docs-url-nibros-portfolio')
    }

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                sh("mkdir -p ${BUILD_DIR}")
                dir("${BUILD_DIR}") {
                    sh('git clone ${GIT_REPO} .')
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('bun install')
                }
            }
        }

        stage('Generate Static Files') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('bun run generate')
                }
            }
        }

        stage('Clean Workspace') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('ls -A | grep -v docs | xargs rm -rf')
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                dir("${BUILD_DIR}") {
                    sh('rsync -avz .output/public/ $VPS_USER@$VPS_HOST:$VPS_DEPLOY_DIR')
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
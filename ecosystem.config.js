module.exports = {
  apps: [{
    name: 'api',
    script: 'bin/www'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-13-210-68-20.ap-southeast-2.compute.amazonaws.com',
      key: './apiadamrumboldcom.pem',
      ref: 'origin/master',
      repo: 'git@github.com:adamrumbold/me-api.git',
      path: '/home/ubuntu/me-api',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

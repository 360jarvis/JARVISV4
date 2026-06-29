import { JARVIXX_PLATFORM } from './platform';

export function getDeploymentInfo() {
  return {
    app: JARVIXX_PLATFORM.productName,
    version: JARVIXX_PLATFORM.version,
    phase: JARVIXX_PLATFORM.phase,
    environment: process.env.RAILWAY_ENVIRONMENT_NAME || process.env.APP_ENV || 'unknown',
    railwayService: process.env.RAILWAY_SERVICE_NAME || 'unknown',
    railwayDeploymentId: process.env.RAILWAY_DEPLOYMENT_ID || 'unknown',
    railwayCommitSha: process.env.RAILWAY_GIT_COMMIT_SHA || 'unknown',
    railwayRepoName: process.env.RAILWAY_GIT_REPO_NAME || 'unknown'
  };
}

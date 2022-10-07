export interface GitCommit {
  name: string;
  email: string;
  message: string;
}

export interface Schema {
  name: string;
  app: string;
  port: number;
  directory: string;
  commit: GitCommit | boolean;
  packageManager: string;
  skipDirectory: boolean;
  skipInstall: boolean;
  skipGit: boolean;
}

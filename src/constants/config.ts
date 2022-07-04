
interface IConfig {
  baseUrl: string;
  appName: string;
}

type appEnvironmentType  = 'live' | 'debug';
const appEnvironment: appEnvironmentType = 'live';
const apiUrl = { live: 'https://ulventech-react-exam.netlify.app', debug: '' }


const config: IConfig = {
  baseUrl: apiUrl[appEnvironment],
  appName: 'MyApp',
}

export default config;
const reporter = require('cucumber-html-reporter');

const date = new Date().toLocaleString();

const options = {
 theme: 'bootstrap',
 jsonFile: 'reports/cucumber.json',
 output: 'reports/cucumber_report.html',
 reportSuiteAsScenarios: true,
 launchReport: true,
 storeScreenshots: true,
 brandTitle: 'Relatório de Testes Funcionais',
 metadata: {
   'Data e hora': date
 }
};

reporter.generate(options);
process.exit();
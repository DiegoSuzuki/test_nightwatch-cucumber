const { Given, Then, When } = require('cucumber');
const { client } = require('nightwatch-cucumber');
const busca = client.page.busca_pages();


Given('que a pessoa está na página do Google', function () {
           return busca.navigate();
});

When('preencher o campo de busca', function () {
    return client
        //.maximizeWindow()
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'Diego de Oliveira Suzuki')
        //.waitForElementVisible('input[name="btnK"]', 10000)
        .pause(1000)
        .click('input[name="btnK"]')
        //.pause(2000)
        //.waitForElementVisible('input[name=btnK]', 3000)
        //.click('input[name=btnK]')
        // Write code here that turns the phrase above into concrete actions
        .pause(1000)
return 'pending';
});

Then('exibe lista com resultados', function () {
    return client
        .waitForElementVisible('input[name=q]', 3000)
        .assert.containsText('#main', 'Diego de Oliveira Suzuki')
        .end();
    

            // Write code here that turns the phrase above into concrete actions
           return 'pending';
});
